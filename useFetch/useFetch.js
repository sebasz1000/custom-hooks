import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: false,
    hasError: null,
  });

  const getQuote = async () => {
    try {
      setState({ ...state, data: null, isLoading: true });
      const res = await fetch(url);
      const quote = await res.json();

      setTimeout(() => {
        setState({
          data: !!quote && quote[0],
          isLoading: false,
        });
      }, 1000);
    } catch (e) {
      setState({
        ...state,
        hasError: e,
      });
    }
  };

  useEffect(() => {
    getQuote();
  }, [url]);

  return {
    ...state,
  };
};
