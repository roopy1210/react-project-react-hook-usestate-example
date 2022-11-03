import React, { useState } from "react";

import ClearIcon from "@mui/icons-material/Clear";
import DoneIcon from "@mui/icons-material/Done";

const TodoList = (props) => {

  const [ taskCss, setTaskCss ] = useState('inline-block mt-1 text-md text-slate-900');
  const [ taskDone, setTaskDone ] = useState(false);
  
  // Done event 처리 함수
  const doneHandler = () => {
    setTaskDone(!taskDone);

    if (taskDone) {
      setTaskCss('mt-1 text-md text-rose-900 line-through');
    }
    else {
      setTaskCss('mt-1 text-md text-slate-900');
    }
  };

  return (
    <ul className="list-none mt-3">
      {props.todos.map(todo => (
        <li
          key={todo.id}
          className="flex items-center justify-between px-2 py-3 border-b"
        >
          <div>
            <p className={taskCss}>{todo.content}</p>
          </div>
          <div>
            <ClearIcon
              style={{ color: "red" }}
              onClick={props.onRemoveItem.bind(this, todo.id)}
              className="cursor-pointer"
            />
            <DoneIcon
              style={{ color: "darkgreen" }}
              onClick={doneHandler}
              className="cursor-pointer"
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
