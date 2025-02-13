import styled from "styled-components";

type TProps = {
  onFilterClick: (type: string) => void;
};

const Container = styled.div``;

const FilterBtnWrap = styled.div``;

const FilterBtn = styled.button``;

function Sidebar({ onFilterClick }: TProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onFilterClick(e.currentTarget.value);
  };
  return (
    <Container>
      <h1>To Do List</h1>
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
    </Container>
  );
}

export default Sidebar;
