import React from "react";

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
        {todoList.map(response => {
          return (
            <li key={response.id}>
              {response.title}
            </li>
          );
        })}
      </ul>
    );
};

export default TodoList;