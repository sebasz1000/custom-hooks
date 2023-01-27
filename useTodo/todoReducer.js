export const todoReducer = (initState = [], action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case "[TODO] Add todo":
      return [...initState, payload];
    case "[TODO] Delete todo":
      return initState.filter((todo) => todo.id != payload);
    case "[TODO] Complete todo":
      return initState.map((todo) => {
        if (payload === todo.id) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });
    default:
      return initState;
  }
};
