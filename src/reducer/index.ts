type Action =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number }
  | { type: "UPDATE_TODO"; payload: { id: number; text: string } }
  | { type: "SET_FILTER"; payload: string }
  | { type: "TOGGLE_TODO_ALL"; payload: boolean }
  | { type: "DELETE_TODO_ALL" };

export type ITodoList = {
  id: number;
  text: string;
  completed: boolean;
};

type TState = {
  list: ITodoList[];
  id: number;
  filterType: string;
};

export const initialState: TState = {
  list: [],
  id: 0,
  filterType: "ALL",
};

export function reducer(state: TState, action: Action): TState {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        list: state.list.concat({
          id: (state.id += 1),
          text: action.payload,
          completed: false,
        }),
        id: state.id + 1,
      };
    case "UPDATE_TODO":
      return {
        ...state,
        list: state.list.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              text: action.payload.text,
            };
          }
          return item;
        }),
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        list: state.list.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              completed: !item.completed,
            };
          }
          return item;
        }),
      };
    case "DELETE_TODO":
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload),
      };
    case "TOGGLE_TODO_ALL":
      return {
        ...state,
        list: state.list.map((item) => {
          return { ...item, completed: action.payload };
        }),
      };
    case "DELETE_TODO_ALL":
      return {
        ...state,
        list: state.list.filter((item) => !item.completed),
      };
    case "SET_FILTER":
      return {
        ...state,
        filterType: action.payload,
      };
    default:
      return state;
  }
}
