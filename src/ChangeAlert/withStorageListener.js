import { useEffect, useState } from "react";

function withStorageListener(WrappedComponent) {
  return function WrappedComponentWithStorageListener(props) {
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
      props.sync();
    };
    return <WrappedComponent show={storageChange} toggleShow={toggleShow} />;
  };
}

export { withStorageListener };
