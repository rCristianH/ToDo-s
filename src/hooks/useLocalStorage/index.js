import React, { useState } from "react";

function useLocalStorage(itemName, initialValue) {
  const withoutToDo = [{ text: "Crea un ToDo", completed: false }];
  const storeData = localStorage.getItem(itemName);
  if (!storeData) {
    initialValue = withoutToDo;
    localStorage.setItem(itemName, JSON.stringify(initialValue));
  } else {
    initialValue = JSON.parse(storeData);
  }

  const [item, setItem] = useState(initialValue);
  console.log("first", item);
  const saveItem = (newItem) => {
    setItem(newItem);
    localStorage.setItem(itemName, JSON.stringify(newItem));
  };
  return [item, saveItem];
}

export { useLocalStorage };
