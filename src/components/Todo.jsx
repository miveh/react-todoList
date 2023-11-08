import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

const Container = styled.div`
  display: flex;
  padding-top: 0.5rem;
  flex-direction: row;
  justify-content: center;
  gap: 0.25rem;
  align-items: center;
`;

const modalContainerStyle = {
  width: "inherit",
};

const Text = styled.input`
  height: inherit;
  padding-left: 10px;
  font-size: 2rem;
  border-radius: 5px;
  height: 50px;
  text-decoration: ${(props) => (props.$isDone ? " line-through" : "none")};
  border: 2px solid #a14fbf;
`;

const Button = styled.img`
  padding: 0.7rem;
  width: 30px;
  height: 30px;
  background: ${(props) => (props.$isDone ? "green" : "tranparent")};
  cursor: pointer;
  border: 2px solid #a14fbf;
  border-radius: 5px;
  &:active {
    background: #5e5d5d;
  }
`;

function Todo({ id, todo, isDone, isDeleted, todoList, setTodoList }) {
  const [modalOpen, setModalOpen] = useState(false);

  const HandleTick = () => {
    const tempTodoList = [...todoList];
    const todo = tempTodoList.findIndex((item) => item.id === id);
    if (tempTodoList[todo].isDone) {
      tempTodoList[todo].isDone = false;
    } else {
      tempTodoList[todo].isDone = true;
    }
    setTodoList(tempTodoList);
  };

  // useEffect(() => {
  //   console.log(todoList);
  // }, [todoList]);

  const HandleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <Container id={id}>
      <Text type="text" $isDone={isDone} disabled value={todo} />
      <Button onClick={HandleModal} $isDone={false} src="./del.svg"></Button>
      <Button onClick={HandleTick} $isDone={isDone} src="./tik.svg"></Button>
      {modalOpen && (
        <Modal
          todoList={todoList}
          setTodoList={setTodoList}
          closeModal={() => setModalOpen(false)}
        ></Modal>
      )}
      <div data-noteid={id} style={modalContainerStyle} id="portal"></div>
    </Container>
  );
}

export default Todo;
