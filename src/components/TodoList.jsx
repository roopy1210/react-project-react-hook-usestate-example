import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return (
    <ul className="list-none mt-3">
      {props.todos.map((todoItem) => (
        <li key={todoItem.id} className="flex items-center justify-between px-2 py-3 border-b">
          <TodoItem todo={todoItem} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
