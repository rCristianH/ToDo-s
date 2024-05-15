import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {
 

  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      console.log("catch");
      const withoutToDo = [{ text: "Crea un ToDo", completed: false }];
      const storeData = localStorage.getItem(itemName);
      let parseItem;
      if (!storeData) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parseItem = withoutToDo;
      } else {
        parseItem = JSON.parse(storeData);
      }
  
      if (JSON.stringify(parseItem) !== JSON.stringify(item)) {
        setItem(parseItem);
      }
  
      setLoading(false);
    } catch (error) {
      console.log("error");
      setLoading(false);
      setError(true);
    }
  }, [itemName, initialValue, item]); // Asegúrate de incluir 'item' en la dependencia del useEffect
  

  const saveItem = (newItem) => {
  console.log("save")
    setItem(newItem);
    localStorage.setItem(itemName, JSON.stringify(newItem));
  };
  return { item, saveItem, loading, error };
}

export { useLocalStorage };
