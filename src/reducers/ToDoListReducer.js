const initialState = {
  todos: [
    {
      id: 1,
      title: "Математика",
      task: "Стр. 4 , упр. 36 а, б.",
      isDone: false,
    },
    {
      id: 2,
      title: "Русский язык",
      task: "Учебник, стр. 4 , упр. 36 а, б.",
      isDone: true,
    },
    {
      id: 3,
      title: "ИЗО",
      task: "Подготовить клей, ножницы, вл. салфетки, цветную бумагу, ножницы, шерстняые нитки",
      isDone: false,
    },
    {
      id: 4,
      title: "Литература",
      task: "Учебник, стр. 4 , упр. 36 а, б.",
      isDone: true,
    },
  ],
};

const toDoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_TODO_IS_DONE": {
      return {
        ...state,
        todos: [...state.todos].map((todo) => {
          if (todo.id === action.id) todo.isDone = !todo.isDone;
          return todo;
        }),
      };
    }
    case "REMOVE_TODO": {
      return {
        ...state,
        todos: [...state.todos].filter((todo) => todo.id !== action.id),
      };
    }
    default:
      return state;
  }
};

export const toggleToDo = (id) => ({ type: "TOGGLE_TODO_IS_DONE", id });

export const removeToDo = (id) => ({ type: "REMOVE_TODO", id });

export default toDoListReducer;
