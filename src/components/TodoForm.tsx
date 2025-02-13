import { useState } from "react";
import styled from "styled-components";

interface IProps {
  onSubmit: (text: string) => void;
}

const Container = styled.form``;

function TodoForm({ onSubmit }: IProps) {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text === "") return;
    onSubmit(text);
    setText("");
  };

  return (
    <Container onSubmit={onHandleSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력하세요."
        value={text}
        onChange={handleChange}
      />
      <button type="submit">추가</button>
    </Container>
  );
}

export default TodoForm;
