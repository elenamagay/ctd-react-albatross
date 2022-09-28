import React from "react";
import styles from "./TodoListItem.module.css";

const TodoListItem = ({ todo, onRemoveTodo }) => {
    return (
        <li className={styles.item}>
            {todo.fields.Title}
            <button style={{textAlign: 'end'}} type="button" onClick={() => onRemoveTodo(todo.id)}>Remove</button>
        </li>
    );
};

export default TodoListItem;