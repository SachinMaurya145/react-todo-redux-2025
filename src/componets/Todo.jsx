import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TASK, DEL_TASK, delTask, EDIT_TASK, editTask } from '../ReduxFiles/actions';

const Todo = () => {
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null); // ⬅️ track which item is being edited
  const [editValue, setEditValue] = useState('');

  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  // Add Task
  const handleInput = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    dispatch({
      type: ADD_TASK,
      payload: inputValue.trim(),
    });

    setInputValue('');
  };

  // Delete Task
  const handleDelete = (index) => {
    dispatch(delTask(index))
    // dispatch({
    //   type: DEL_TASK,
    //   payload: index,
    // });
  };

  // Start Editing
  const handleEdit = (index) => {
    setEditIndex(index);
    setEditValue(tasks[index]); // Pre-fill with current value
  };

  // Save Edited Task
  const saveEdit = () => {

    dispatch(editTask(editIndex, editValue))
    // dispatch({
    //   type: EDIT_TASK,
    //   payload: {
    //     index: editIndex,
    //     newValue: editValue,
    //   },
    // });

    // Reset
    setEditIndex(null);
    setEditValue('');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">To-Do List</h2>

        {/* Input for Adding */}
        <form className="flex gap-2 mb-4" onSubmit={handleInput}>
          <input
            type="text"
            placeholder="Add new task"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition">
            Add
          </button>
        </form>

        {/* Task List */}
        <ul className="space-y-3">
          {tasks.map((task, index) => (
            <li key={index} className="flex justify-between items-center bg-gray-50 p-3 rounded-xl shadow-sm">
              {/* If editing this task */}
              {editIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    className="flex-1 px-2 py-1 border rounded-md"
                  />
                  <button className="text-blue-600 font-medium ml-2" onClick={saveEdit}>
                    Save
                  </button>
                </>
              ) : (
                <>
                  <span className="text-gray-700">{task}</span>
                  <div className="flex gap-2">
                    <button className="text-green-600" onClick={() => handleEdit(index)}>
                      Edit
                    </button>
                    <button className="text-red-600" onClick={() => handleDelete(index)}>
                      X
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
