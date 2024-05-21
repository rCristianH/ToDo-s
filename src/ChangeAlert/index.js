import React, { useEffect } from "react";
import { withStorageListener } from "./withStorageListener";

function ChangeAlert({ show, toggleShow }) {
  useEffect(() => {
    // Establece un temporizador de 3 segundos
    const timer = setTimeout(() => {
      toggleShow();
    }, 3000);

    // Limpia el temporizador si el componente se desmonta
    return () => clearTimeout(timer);
  }, [toggleShow,show]);
  if (show) {
    return (
      <>
        <p>Hay cambios please, recharge...</p>
        <button class="btn btn-secondary" onClick={toggleShow}>
          ReCharge
        </button>
      </>
    );
  } else {
    return null;
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
