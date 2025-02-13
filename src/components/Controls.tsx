import styled from "styled-components";
import { ITodoItem } from "../App";

interface IProps {
  data: ITodoItem[];
  onToggleAll: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDeleteCompleted: () => void;
}

const TodoTop = styled.div``;

function Controls({ data, onToggleAll, onDeleteCompleted }: IProps) {
  const isAllCompleted =
    data.length > 0 && data.every((item) => item.completed);

  const completedNum = data.filter((item) => item.completed).length;
  return (
    <TodoTop>
      <label>
        <input
          type="checkbox"
          checked={isAllCompleted}
          onChange={onToggleAll}
        />
        전체 선택
      </label>
      {completedNum > 0 && (
        <button onClick={onDeleteCompleted}>
          {completedNum} 개 할 일 삭제
        </button>
      )}
    </TodoTop>
  );
}

export default Controls;
