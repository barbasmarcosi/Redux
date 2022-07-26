import axios from "axios";
import { ERROR_TASKS, GET_ALL_TASKS, LOADING_TASKS } from "../types/tasksTypes";

export const getAllTasks = () => async (dispatch) => {
  dispatch({
    type: LOADING_TASKS,
  });
  try {
    const response = await axios.get(
      "http://jsonplaceholder.typicode.com/todos"
    );
    const tasks = {};
    response.data.map(
      (task) =>
        (tasks[task.userId] = {
          ...tasks[task.userId],
          [task.id]: { ...task },
        })
    );
    dispatch({
      type: GET_ALL_TASKS,
      payload: tasks,
    });
  } catch (err) {
    dispatch({
      type: ERROR_TASKS,
      payload: err.message,
    });
  }
};

export const onChangeCompleted = (id) => async (dispatch, getState) => {
  dispatch({
    type: LOADING_TASKS,
  });
  try {
    const tasksRed = getState().tasksReducer;
    const taskId = id.slice(0, id.indexOf(","));
    const userId = id.slice(id.indexOf(",") + 1, id.length);
    tasksRed.tasks[userId][taskId].completed =
      !tasksRed.tasks[userId][taskId].completed;
    dispatch({
      type: GET_ALL_TASKS,
      payload: tasksRed.tasks,
    });
  } catch (err) {
    dispatch({
      type: ERROR_TASKS,
      payload: err.message,
    });
  }
};
