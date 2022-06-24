import React from "react";

const AddTodoForm = () => {
    const handleAddTodo = (event) => {
        event.preventDefault();
        let todoTitle = event.target.title.value;
        console.log(todoTitle);
        event.target.reset();
    };
    
    return (
        <form  onSubmit = {handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input 
                id="todoTitle" 
                name="title">                
            </input>
            <button type="submit">Add</button>
        </form>
    );

};

export default AddTodoForm;