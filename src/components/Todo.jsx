import React, { useState } from "react";
import TodoForm from "./TodoForm.";
import TodoList from "./TodoList";

const Todo = () => {
  // Todo 목록 설정 
  const [userTodos, setUserTodos ] = useState([]);

  const addTodoHandler = (todo) => {
    setUserTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), ...todo},
    ]);    
  }

  return (
    <div className="h-100 w-full flex items-center justify-center">
      <div className="p-4 m-4 w-full lg:w-3/4 lg:max-w-3xl">
        <TodoForm onAddTodo={addTodoHandler} />
        <section>
          <TodoList todos={userTodos} />
        </section>
      </div>
    </div>
  );
};

export default Todo;
