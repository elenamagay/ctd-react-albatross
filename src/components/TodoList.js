import React from "react";
import TodoListItem from "./TodoListItem";
import styles from "./TodoList.module.css";
import PropTypes from "prop-types";
  
const TodoList = ({ todoList, onRemoveTodo, sortByTitle, sortAZ }) => {
    return (
      <div className={styles.wrapper}>
        <div className={styles.sortLayout}>
          {(todoList.length > 0) &&
          <button
            className={styles.sortBtn}
            type="button"
            onClick={()=>sortAZ(sortByTitle)}>
              Sort by
          </button>}
        </div>
        <div className={styles.todoLayout}>
        <ul className={styles.todoList}>
          {todoList.map(todo => (
            <TodoListItem 
            key={todo.id} 
            todo={todo} 
            onRemoveTodo={onRemoveTodo} 
            />
          ))}
        </ul>
        </div>
      </div>
      
    );
};

TodoList.propTypes = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func
};

export default TodoList;