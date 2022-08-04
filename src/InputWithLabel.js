import React from "react";

const InputWithLabel = (props) => {
    const inputRef = React.useRef();

    React.useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [])
    return (
        <>
            <label htmlFor="todoTitle">{props.children}</label>
                <input 
                    id="todoTitle" 
                    name="title"
                    value={props.todoTitle}
                    ref={inputRef}
                    onChange={props.handleTitleChange}           
                />
        </>
    );
};

export default InputWithLabel;