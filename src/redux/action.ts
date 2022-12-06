import * as types from "./actionType";

export const addTodo = (id: number) => ({
  type: types.ADD_TODO,
  payload: id,
});

export const deleteTodo = (todo: any) => ({
  type: types.DELETE_TODO,
  payload: todo,
});

export const updateTodo = (todo: any) => ({
  type: types.UPDATE_TODO,
  payload: todo,
});

export const completeTodo = (todo: any) => ({
  type: types.COMPLETE_TODO,
  payload: todo,
});

