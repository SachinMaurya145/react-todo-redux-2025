// Action Types
export const ADD_TASK = "ADD_TASK";
export const DEL_TASK = "DEL_TASK";
export const EDIT_TASK = "EDIT_TASK";


// Action Creator
export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task, // the actual task text to be added
  };
};

export const editTask = (index, newValue) => {
    return {
      type: EDIT_TASK,
      payload: {
        index,
        newValue,
      },
    };
  };


export const delTask = (taskId) =>{
    return{
        type: DEL_TASK,
        payload: taskId, //
    }
};

