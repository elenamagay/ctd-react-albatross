import React from "react";
import styles from "./InputWithLabel.module.css";

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
                    className={styles.input}
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