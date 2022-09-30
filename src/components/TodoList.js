import React from "react";
import TodoListItem from "./TodoListItem";
import styles from "./TodoList.module.css";
import PropTypes from "prop-types";

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
  
const TodoList = ({ todoList, onRemoveTodo }) => {
    return (
        <ul className={styles.todoList}>
            {todoList.map(todo => (
                <TodoListItem 
                key={todo.id} 
                todo={todo} 
                onRemoveTodo={onRemoveTodo} 
                />
            ))}
        </ul>
    );
};

TodoList.propTypes = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func
};

export default TodoList;