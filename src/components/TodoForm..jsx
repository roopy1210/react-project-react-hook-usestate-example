import React, { useState } from "react";

const TodoForm = (props) => {  
  const [ enteredTodo, setEnteredTodo ] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddTodo({task: enteredTodo});
    setEnteredTodo('');
  }

  return (
    <>
      <div>
        <h1 className="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
          Todo List
        </h1>
      </div>
      <form onSubmit={submitHandler}>
        <div className="flex mt-6">
          <input
            type="text"
            className="shadow-md shadow-blue-200/40 md:shadow-indigo-200/40 border rounded w-full py-2 px-3 mr-2"
            placeholder="Add Todo"
            id="todo"
            value={enteredTodo}
            onChange={event => {
              setEnteredTodo(event.target.value);
            }}
          />
          <button className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 border border-rose-700 rounded">
            ADD
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
