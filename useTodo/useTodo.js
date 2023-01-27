import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => JSON.parse(localStorage.getItem("todos")) || [];

export const useTodo = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onNewTodo = (todo) => {
    dispatchTodo({
      type: "[TODO] Add todo",
      payload: todo,
    });
  };

  const onDeleteTodo = (todoId) => {
    dispatchTodo({
      type: "[TODO] Delete todo",
      payload: todoId,
    });
  };

  const onCompletedTodo = (todoId) => {
    dispatchTodo({
      type: "[TODO] Complete todo",
      payload: todoId,
    });
  };

  const getPendingTodosNumber = () => {
    return todos.filter((todo) => !todo.done).length;
  };

  return {
    todos,
    onNewTodo,
    onDeleteTodo,
    onCompletedTodo,
    pendings: getPendingTodosNumber(),
  };
};
