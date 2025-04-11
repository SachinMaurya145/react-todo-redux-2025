import { ADD_TASK, DEL_TASK, EDIT_TASK } from "./actions";

// Initial state of the to-do list
const initialState = {
  tasks: [],
};

// Reducer function
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload], // add new task
      };

    case DEL_TASK:
      console.log("Deleting task at index:", action.payload);
      return {
        ...state,
        tasks: state.tasks.filter((_, index) => index !== action.payload),
      };

    case EDIT_TASK:
      const { index, newValue } = action.payload;
      return {
        ...state,
        tasks: state.tasks.map((task, i) =>
          i === index ? newValue : task
        ),
      };

    default:
      return state;
  }
};
