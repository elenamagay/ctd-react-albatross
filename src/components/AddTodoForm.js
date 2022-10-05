import React from "react";
import InputWithLabel from "./InputWithLabel";
import styles from "./AddTodoForm.module.css"
import PropTypes from "prop-types";

const AddTodoForm = ({ onAddTodo }) => {
    
    const [todoTitle, setTodoTitle] = React.useState('');

    const handleTitleChange = (event) => {
        const newTodo = event.target.value;
        setTodoTitle(newTodo);
    };

    const handleAddTodo = (event) => {
        event.preventDefault();        
        onAddTodo({
            fields: {Title: todoTitle}
        });
        
        //always do this last
        setTodoTitle('');
    };
    
    return (
        <form className={styles.addForm} onSubmit={handleAddTodo}>
            <InputWithLabel 
            id="todoTitle"
            name= "title"
            isFocused="true"
            value={todoTitle}
            onChange={handleTitleChange}
            ></InputWithLabel>
            <button className={styles.addBtn} type="submit">Add</button>
        </form>
    );

};

AddTodoForm.propTypes = {onAddTodo: PropTypes.func};

export default AddTodoForm;