
import React, { useState } from "react";

import ClearIcon from "@mui/icons-material/Clear";
import DoneIcon from "@mui/icons-material/Done";

const TodoItem = props => {

  const [ taskCss, setTaskCss ] = useState('inline-block mt-1 text-md text-slate-900');
  const [ taskDone, setTaskDone ] = useState(false);
  
  const doneHandler =() => {
    setTaskDone(!taskDone);

    if (taskDone) {
      setTaskCss('mt-1 text-md text-rose-900 line-through');
    }
    else {
      setTaskCss('mt-1 text-md text-slate-900');
    }
  };

  return (
    <>
      <div>
        <p className={taskCss}>
          {props.todo.task}
        </p>
      </div>
      <div>
        <ClearIcon style={{ color: "red" }} className='cursor-pointer' />
        <DoneIcon style={{ color: "darkgreen" }} onClick={doneHandler} className='cursor-pointer' />
      </div>
    </>
  );
};

export default TodoItem;
