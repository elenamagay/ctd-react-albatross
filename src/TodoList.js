import React from "react";
import TodoListItem from "./TodoListItem";

const todoList = [
    {
      id: 1,
      title: 'clean the house',
    },
    {
      id: 2,
      title: 'do homework',
    },
    {
      id: 3,
      title: 'call mom',
    },
    {
      id: 4,
      title: 'buy groceries',
    },
    {
      id: 5,
      title: 'planning a birthday party',
    },
  ];  
  
const TodoList = () => {
    return (
        <ul>
        {todoList.map((todo) => (
            // <li >
                <TodoListItem key={todo.id} title={todo.title} />
            // </li>
        ))}
      </ul>
    );
};

export default TodoList;