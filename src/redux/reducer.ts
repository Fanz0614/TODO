import * as types from "./actionType";

const initialState = {
  todo: [
    { id: 1, task: "React", complete: false },
    { id: 2, task: "Node", complete: false },
  ],
};

const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
      };
    case types.DELETE_TODO:
      return {
        ...state,
      };
    case types.UPDATE_TODO:
      return {
        ...state,
      };
    case types.COMPLETE_TODO:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default todoReducer;
