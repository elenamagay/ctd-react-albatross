import React from "react";
import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.containerAbout}>
            <h1 className={styles.headerAbout}>About</h1>
            <p className={styles.textAbout}>
                To-Do List, a Single-page application, was created with a use of React (a front-end JavaScript library). 
                The code is organized in folders and files.
            </p>
            <p className={styles.textAbout}>
                This application is pretty simple in use. Just type a task in an input field and press the Add button.
                After that the task is added to the list. In parallel it is added to a Base created on Airtable.
                Also there is a delete button next to each task. After clicking on it a task is deleted both from the lisk and Airtable Base.
            </p>
            <p className={styles.textAbout}>
                Upcoming features: update and complete buttons, splash screen and more
            </p>
        </div>
    );
};

export default About;