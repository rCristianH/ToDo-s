import { useEffect, useState } from "react";

function useStorageListener(sync) {
  const [storageChange, setStorageChange] = useState(false);

  useEffect(() => {
    window.addEventListener("storage", (change) => {
      if (change.key === "Data_ToDo_V1") {
        setStorageChange(true);
      }
    });
  }, []);
  const toggleShow = () => {
    setStorageChange(false);
    sync();
  };
  return { show: storageChange, toggleShow: toggleShow };
}

export { useStorageListener };
