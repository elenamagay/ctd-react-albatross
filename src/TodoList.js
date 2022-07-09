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
  
const TodoList = ({ todoList }) => {
    return (
        <ul>
            {todoList.map((todo) => (
                <TodoListItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
};

export default TodoList;