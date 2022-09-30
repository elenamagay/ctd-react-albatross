import React from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';

const App = () => {
  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const url_API = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`

  React.useEffect(()=> {
    fetch(url_API,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
        }
      })
    .then((res) => res.json())
    .then((result) => {
      setTodoList(result.records);
      setIsLoading(false)        
    })

  }, []);

  React.useEffect(() => {
    if (isLoading===false) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }    
  }, [todoList]);
  
  const addTodo = newTodo => {
    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = id => {
    const newTodoList = todoList.filter(listItem => id !== listItem.id);

    setTodoList(newTodoList);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact path="/"
          element={
            <div className={styles.container}>
              <h1 className={styles.headline}>Todo List</h1>
              <AddTodoForm onAddTodo={addTodo} />
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
              )}
            </div>
          }
        ></Route>
        <Route 
        path='/new'
        element={
          <h1>New Todo List</h1>
        }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
