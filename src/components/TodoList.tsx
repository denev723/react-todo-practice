import styled from "styled-components";
import { ITodoItem } from "../App";
import TodoItem from "./TodoItem";

interface IProps {
  data: ITodoItem[];
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
