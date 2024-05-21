import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [sync, setSync] = useState(true)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
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
      setSync(true)

      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }, [itemName, initialValue, item, sync]); // Asegúrate de incluir 'item' en la dependencia del useEffect

  const saveItem = (newItem) => {
    setItem(newItem);
    localStorage.setItem(itemName, JSON.stringify(newItem));
  };

  const synct = () => {
    setLoading(true)
    setSync(false)
  }

  return { item, saveItem, loading, error, synct };
}

export { useLocalStorage };
