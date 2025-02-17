import styled from "styled-components";
import TodoItem from "./TodoItem";
import { ITodoList } from "../reducer";

interface IProps {
  data: ITodoList[];
  onToggle: (id: number) => void;
  onEditChange: (id: number, text: string) => void;
  onDelete: (id: number) => void;
}

const Container = styled.ul``;

function TodoList({ data, onToggle, onEditChange, onDelete }: IProps) {
  return (
    <Container>
      {data.map((item) => {
        return (
          <TodoItem
            key={item.id}
            id={item.id}
            text={item.text}
            completed={item.completed}
            onToggle={onToggle}
            onEditChange={onEditChange}
            onDelete={onDelete}
          />
        );
      })}
    </Container>
  );
}

export default TodoList;
