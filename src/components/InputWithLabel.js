import React from "react";
import styles from "./InputWithLabel.module.css";
import PropTypes from "prop-types";

const InputWithLabel = ({
    id, 
    name, 
    value, 
    children, 
    onChange, 
    type='text'
    }) => {

    const inputRef = React.useRef();

    React.useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [])

    return (
        <>
            <label htmlFor={id}>
                {children}
            </label>
            <input 
                className={styles.input}
                id={id} 
                name={name}
                value={value}
                ref={inputRef}
                onChange={onChange}
                type={type}
            />
        </>
    );
};

InputWithLabel.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string, 
    children: PropTypes.string, 
    onChange:PropTypes.func, 
    type:PropTypes.string
}

export default InputWithLabel;