import styled from "styled-components";

type TProps = {
  onFilterClick: (type: string) => void;
};

const Title = styled.h1`
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;

const FilterBtnWrap = styled.div`
  margin-top: 100px;
`;

const FilterBtn = styled.button`
  width: 100%;
  display: block;
`;

function Sidebar({ onFilterClick }: TProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onFilterClick(e.currentTarget.value);
  };
  return (
    <>
      <Title>To Do List</Title>
      <FilterBtnWrap>
        <FilterBtn onClick={handleClick} value="ALL">
          모두
        </FilterBtn>
        <FilterBtn onClick={handleClick} value="TO_DO">
          할 일
        </FilterBtn>
        <FilterBtn onClick={handleClick} value="COMPLETED">
          완료됨
        </FilterBtn>
      </FilterBtnWrap>
    </>
  );
}

export default Sidebar;
