import React, { useEffect } from "react";
import { useStorageListener } from "./useStorageListener";

function ChangeAlert({ sync }) {
  const { show, toggleShow } = useStorageListener(sync);
  useEffect(() => {
    // Establece un temporizador de 3 segundos
    const timer = setTimeout(() => {
      toggleShow();
    }, 3000);

    // Limpia el temporizador si el componente se desmonta
    return () => clearTimeout(timer);
  }, [toggleShow, show]);
  if (show) {
    return (
      <>
        <p>Hay cambios please, recharge...</p>
        <button className="btn btn-secondary" onClick={toggleShow}>
          ReCharge
        </button>
      </>
    );
  } else {
    return null;
  }
}

export { ChangeAlert };
