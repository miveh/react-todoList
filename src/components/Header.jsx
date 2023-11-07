import React from "react";
import Input from "./styles/Input";
import styled from "styled-components";

const dropDown = {
  padding: "1rem",
  borderRadius: "5px",
  fontSize: "1.5rem",
  border: "2px solid #a14fbf",
};

const container = {
  gap: "0.5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "5px",
};

const Button = styled(Input)`
  width: 50px;
`;
function Header({ todo, setTodo, todoList, setTodoList }) {
  const createTodo = (e) => {
    setTodoList((todoList) => [
      ...todoList,
      {
        id: "_" + Math.random().toString(36).slice(2, 9),
        todo: todo,
        isDone: false,
        isDelete: false,
      },
    ]);
  };

  return (
    <div>
      <div style={container}>
        <Input
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          $type="text"
          value={todo}
        ></Input>
        <Button
          $type="button"
          $cursor="pointer"
          value={"+"}
          onClick={createTodo}
        />
        <select style={dropDown} name="cars" id="cars">
          <option value="Done">Done</option>
          <option value="Undone">Undone</option>
          <option value="All">All</option>
        </select>
      </div>
    </div>
  );
}

export default Header;
