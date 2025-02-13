import { useRef, useState } from "react";
import styled from "styled-components";
import Controls from "./components/Controls";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Sidebar from "./components/Sidebar";

const Wrap = styled.div``;

const Container = styled.div``;

const TodoWrap = styled.div``;

export interface ITodoItem {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const defaultId = useRef(0);
  const [list, setList] = useState<ITodoItem[]>([]);

  const [filterType, setFilterType] = useState("ALL");

  const filterTypeList = list.filter((item) => {
    if (filterType === "ALL") {
      return item;
    } else if (filterType === "TO_DO") {
      return !item.completed;
    } else {
      return item.completed;
    }
  });

  const handleSubmit = (text: string) => {
    setList((prevList) =>
      prevList.concat({
        id: (defaultId.current += 1),
        text,
        completed: false,
      })
    );
  };

  const handleToggle = (id: number) => {
    setList((prevList) =>
      prevList.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleToggleAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    setList((prevList) =>
      prevList.map((item) => {
        return { ...item, completed: e.target.checked };
      })
    );
  };

  const handleDelete = (id: number) => {
    setList((prevList) => prevList.filter((item) => item.id !== id));
  };

  const handleDeleteCompleted = () => {
    setList((prevList) => prevList.filter((item) => !item.completed));
  };

  const handleEditChange = (id: number, text: string) => {
    setList((prevList) =>
      prevList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            text,
          };
        }
        return item;
      })
    );
  };

  function handleFilterClick(type: string) {
    setFilterType(type);
  }

  return (
    <Wrap>
      <Sidebar onFilterClick={handleFilterClick} />
      <Container>
        <TodoForm onSubmit={handleSubmit} />
        <TodoWrap>
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
        </TodoWrap>
      </Container>
    </Wrap>
  );
}

export default App;
