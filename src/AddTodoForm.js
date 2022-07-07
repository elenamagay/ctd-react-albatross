import React from "react";

const AddTodoForm = (props) => {
    
    const [todoTitle, setTodoTitle] = React.useState('');

    const handleTitleChange = (event) => {
        let newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    };

    const handleAddTodo = (event) => {
        event.preventDefault();        
        props.onAddTodo(todoTitle);
        
        //always do this last
        event.target.reset();
    };
    
    return (
        <form  onSubmit = {handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input 
                id="todoTitle" 
                name="title"
                value={todoTitle}
                onChange={handleTitleChange}           
            />
            <button type="submit">Add</button>
        </form>
    );

};

export default AddTodoForm;