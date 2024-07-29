import { useEffect, useReducer } from "react";

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = useReducer(reducer, initialState({ initialValue }));
  const { item, sync, loading, error } = state;

  const onSync = () => {
    dispatch({ type: actionTypes.sync });
  };
  const onFullSync = () => {
    dispatch({ type: actionTypes.fullSync });
  };
  const onCatch = () => {
    dispatch({ type: actionTypes.catch });
  };
  const onUpdateItem = (sendItem) => {
    dispatch({ type: actionTypes.item, payload: sendItem });
  };

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
        onUpdateItem(parseItem);
      }
      onFullSync();
    } catch (error) {
      onCatch();
    }
  }, [sync,initialValue, item,itemName]); // Asegúrate de incluir 'item' en la dependencia del useEffect

  const saveItem = (newItem) => {
    onUpdateItem(newItem);
    localStorage.setItem(itemName, JSON.stringify(newItem));
  };

  const synct = () => {
    onSync();
  };
  return { item, saveItem, loading, error, synct };
}

const initialState = ({ initialValue }) => ({
  item: initialValue,
  sync: true,
  loading: true,
  error: false,
});
const actionTypes = {
  sync: "SYNC",
  fullSync: "FULLSYNC",
  item: "ITEM",
  catch: "CATCH",
};
const reduceObj = (state, payload) => ({
  [actionTypes.sync]: {
    ...state,
    sync: false,
    loading: false,
  },
  [actionTypes.fullSync]: {
    ...state,
    sync: true,
    loading: false,
  },
  [actionTypes.catch]: {
    ...state,
    loading: false,
    error: true,
  },
  [actionTypes.item]: {
    ...state,
    item: payload,
  },
});
const reducer = (state, action) => {
  return reduceObj(state, action.payload)[action.type] || state;
};

export { useLocalStorage };
