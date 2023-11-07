import React, { useEffect, useState } from "react";
import Header from "./header";
import Main from "./Main";

function Home() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  return (
    <>
      <Header
        todo={todo}
        setTodo={setTodo}
        todoList={todoList}
        setTodoList={setTodoList}
      />

      <Main todoList={todoList} setTodoList={setTodoList} />
    </>
  );
}

export default Home;
