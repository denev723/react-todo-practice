import styled from "styled-components";
import { ITodoItem } from "../App";
import { useState } from "react";

interface IProps {
  id: ITodoItem["id"];
  text: ITodoItem["text"];
  completed: ITodoItem["completed"];
  onToggle: (id: number) => void;
  onEditChange: (id: number, text: string) => void;
  onDelete: (id: number) => void;
}

interface IPara {
  isCompleted: boolean;
}

const TodoItemContainer = styled.li``;
const TodoContent = styled.div``;
const TodoBtnWrap = styled.div``;
const Title = styled.p<IPara>`
  text-decoration: ${(props) => (props.isCompleted ? "line-through" : "none")};
`;

function TodoItem({
  id,
  text,
  completed,
  onToggle,
  onEditChange,
  onDelete,
}: IProps) {
  const [newText, setNewText] = useState(text);
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    if (edit) {
      onEditChange(id, newText);
    }
    setEdit((prev) => !prev);
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewText(e.target.value);
  };

  return (
    <TodoItemContainer>
      <TodoContent>
        {edit ? (
          <input type="text" value={newText} onChange={handleEditChange} />
        ) : (
          <>
            <input
              type="checkbox"
              checked={completed}
              onChange={() => onToggle(id)}
            />
            <Title isCompleted={completed}>{newText}</Title>
          </>
        )}
      </TodoContent>
      <TodoBtnWrap>
        <button onClick={handleEdit}>수정</button>
        <button onClick={() => onDelete(id)}>삭제</button>
      </TodoBtnWrap>
    </TodoItemContainer>
  );
}

export default TodoItem;
