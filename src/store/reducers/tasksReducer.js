import {ADDTASK, DELETETASK, UPDATETASK} from '../types/tasksTypes';

const initialState = {
  tasks: [],
  taskStatus: [
    {id: 1, status: 'completed', value: 0, color: '#5DD669'},
    {id: 2, status: 'in-progress', value: 0, color: '#9D9BFF'},
    {id: 3, status: 'on-hold', value: 0, color: '#F6BB54'},
    {id: 4, status: 'in-review', value: 0, color: '#EDA7FF'},
  ],
};
const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DELETETASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    case UPDATETASK:
      return {
        ...state,
        tasks: state?.tasks?.map(task =>
          task.id === action.payload.id ? action.payload : task,
        ),
      };
    default:
      return state;
  }
};

export default tasksReducer;
