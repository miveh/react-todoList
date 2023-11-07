import React, { useEffect } from "react";
import styled from "styled-components";
import Todo from "./Todo";

const imageStyle = {
  width: "50px",
  height: "50px",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function Main({ todoList, setTodoList }) {
  // useEffect(() => {
  //   console.log(todoList);
  // }, [todoList]);

  return (
    <Container>
      {todoList.map((item) => (
        <Todo
          key={item.id}
          todoList={todoList}
          setTodoList={setTodoList}
          id={item.id}
          todo={item.todo}
          isDone={item.isDone}
          isDeleted={item.isDeleted}
        />
      ))}
    </Container>
  );
}

export default Main;
