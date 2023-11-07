import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding-top: 0.5rem;
  flex-direction: row;
  justify-content: center;
  gap: 0.25rem;
  align-items: center;
`;

const Text = styled.input`
  height: inherit;
  padding-left: 10px;
  font-size: 2rem;
  border-radius: 5px;
  height: 50px;
  text-decoration: ${(props) => (!props.$isDone ? " line-through" : "")};

  border: 2px solid #a14fbf;
`;

const Button = styled.img`
  padding: 0.7rem;
  width: 30px;
  height: 30px;
  background: ${(props) => (!props.$isDone ? "green" : "tranparent")};
  cursor: pointer;
  border: 2px solid #a14fbf;
  border-radius: 5px;
  &:active {
    background: #5e5d5d;
  }
`;

function Todo({ id, todo, isDone, isDeleted, todoList, setTodoList }) {
  const HandleTick = () => {
    console.log(todoList);
    const tempTodoList = [...todoList];
    const todo = tempTodoList.findIndex((item) => item.id === id);
    tempTodoList[todo].isDone
      ? (tempTodoList[todo].isDone = false)
      : (tempTodoList[todo].isDone = true);
  };

  return (
    <Container>
      <Text type="text" disabled value={todo} />
      <Button $isDone={false} src="./del.svg"></Button>
      <Button onClick={HandleTick} $isDone={isDone} src="./tik.svg"></Button>
    </Container>
  );
}

export default Todo;
