import { useReducer } from "react";
import styled from "styled-components";
import Controls from "./components/Controls";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Sidebar from "./components/Sidebar";
import { initialState, reducer } from "./reducer";

const Wrap = styled.div`
  display: flex;
`;

const SidebarWrap = styled.div`
  width: 320px;
`;

const TodoWrap = styled.div`
  width: calc(100% - 320px);
  padding: 20px;
`;

const TodoListWrap = styled.div``;

export interface ITodoItem {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const filterTypeList = state.list.filter((item) => {
    if (state.filterType === "ALL") {
      return item;
    } else if (state.filterType === "TO_DO") {
      return !item.completed;
    } else {
      return item.completed;
    }
  });

  const handleSubmit = (text: string) => {
    dispatch({ type: "ADD_TODO", payload: text });
  };

  const handleToggle = (id: number) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const handleToggleAll = (flag: boolean) => {
    dispatch({ type: "TOGGLE_TODO_ALL", payload: flag });
  };

  const handleDelete = (id: number) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  const handleDeleteCompleted = () => {
    dispatch({ type: "DELETE_TODO_ALL" });
  };

  const handleEditChange = (id: number, text: string) => {
    dispatch({ type: "UPDATE_TODO", payload: { id, text } });
  };

  function handleFilterClick(type: string) {
    dispatch({ type: "SET_FILTER", payload: type });
  }

  return (
    <Wrap>
      <SidebarWrap>
        <Sidebar onFilterClick={handleFilterClick} />
      </SidebarWrap>
      <TodoWrap>
        <TodoForm onSubmit={handleSubmit} />
        <TodoListWrap>
          <Controls
            data={filterTypeList}
            onToggleAll={handleToggleAll}
            onDeleteCompleted={handleDeleteCompleted}
          />
          <TodoList
            data={filterTypeList}
            onToggle={handleToggle}
            onEditChange={handleEditChange}
            onDelete={handleDelete}
          />
        </TodoListWrap>
      </TodoWrap>
    </Wrap>
  );
}

export default App;
