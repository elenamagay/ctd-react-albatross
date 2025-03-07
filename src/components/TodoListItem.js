import React from "react";
import styles from "./TodoListItem.module.css";
import PropTypes from "prop-types";
import { RiDeleteBin6Line } from 'react-icons/ri';
const TodoListItem = ({ todo, onRemoveTodo }) => {
    return (
      <>
        <li className={styles.item}>
          {todo.fields.Title}
          <button
            className={styles.removeBtn}
            type="button"
            onClick={() => onRemoveTodo(todo.id)}
          >
            {<RiDeleteBin6Line />}
          </button>
        </li>
      </>
    );
};

TodoListItem.propTypes = {
    todo: PropTypes.object,
    onRemoveTodo: PropTypes.func
};

export default TodoListItem;