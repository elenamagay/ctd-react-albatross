import React from "react";
import InputWithLabel from "./InputWithLabel";
import styles from "./AddTodoForm.module.css"

const AddTodoForm = ({ onAddTodo }) => {
    
    const [todoTitle, setTodoTitle] = React.useState('');

    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    };

    const handleAddTodo = (event) => {
        event.preventDefault();        
        onAddTodo({
            fields: {Title: todoTitle}
            // id: Date.now()
        });
        
        //always do this last
        setTodoTitle("");
    };
    
    return (
        <form className={styles.addForm} onSubmit={handleAddTodo}>
            <InputWithLabel 
            todoTitle={todoTitle}
            handleTitleChange={handleTitleChange}
            >
                Title
            </InputWithLabel>
            <button className={styles.addBtn} type="submit">Add</button>
        </form>
    );

};

export default AddTodoForm;