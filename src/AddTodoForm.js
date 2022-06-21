import React from "react";

const AddTodoForm = () => {
    return (
        <form>
            <label htmlFor="todoTitle">Title</label>
            <input id="todoTitle"></input>
            <button input type="submit">Add</button>
        </form>
    );
};

export default AddTodoForm;