import React, { useState } from "react";
import TodoForm from "./TodoForm.";
import TodoList from "./TodoList";

const Todo = () => {
  // Todo 목록 설정 
  const [userTodos, setUserTodos ] = useState([]);

  // Todo 항목 추가
  const addTodoHandler = (todo) => {
    setUserTodos(prevTodos => [
      ...prevTodos,
      { id: Math.random().toString(), ...todo},
    ]);    
  }

  // Todo 항목 삭제
  const removeTodoHandler = todoId => {
    setUserTodos(prevTodos =>
      prevTodos.filter(todo => todo.id !== todoId)
    );
  };

  return (
    <div className="h-100 w-full flex items-center justify-center">
      <div className="p-4 m-4 w-full lg:w-3/4 lg:max-w-3xl">
        <TodoForm onAddTodo={addTodoHandler} />
        <section>
          <TodoList todos={userTodos} onRemoveItem={removeTodoHandler} />
        </section>
      </div>
    </div>
  );
};

export default Todo;
