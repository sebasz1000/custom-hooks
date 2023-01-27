import { useState } from "react";

export const useCounter = (initState = 0) => {
  const [counter, setCounter] = useState(initState);

  const onAdd = (value = 1) => setCounter(counter + value);
  const onSub = (value = 1) => {
    counter > 0 && setCounter(counter - value);
  };
  const onReset = () => setCounter(initState);
  return {
    counter,
    onAdd,
    onSub,
    onReset,
  };
};
