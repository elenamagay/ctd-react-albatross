import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import { object } from 'prop-types';

const App = () => {
  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [ascSort, setAscSort] = React.useState(false);
  const url_API = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`
  
  React.useEffect(()=> {
    fetch(`${url_API}?view=Grid%20view&sort[0][field]=Title&sort[0][direction]=asc`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,          
      }
    })
    .then((res) => res.json())
    .then((result) => {
      // result.records.sort((objectA, objectB) => {
      //   if (objectA.fields.Title > objectB.fields.Title) {
      //     return 1;
      //   } else if (objectA.fields.Title < objectB.fields.Title) {
      //     return -1;
      //   } else {
      //     return 0;
      //   }
      // })
      setTodoList(result.records);
      setIsLoading(false)        
    })
    .catch((error) => 
    console.error(error))
  }, []);

  React.useEffect(() => {
    if (isLoading===false) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }    
  }, [todoList]);
  
  const sortByTitle = (objectA, objectB) => {
    const firstTitle = objectA.fields.Title;
    const secondTitle = objectB.fields.Title;

    if (ascSort) {
      setAscSort(ascSort);
      if (firstTitle > secondTitle) {
        return 1;
      } else if (firstTitle < secondTitle) {
        return -1;
      } else {
        return 0;
      }
    }
  };

  const sortAZ = () => {
    setTodoList([...todoList.sort(sortByTitle)]);
  };
  const addTodo = (newTodo) => {  
    fetch(url_API,{
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify(newTodo),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        setTodoList([...todoList, result]);
      })
      .catch((error) => {
        console.error ("Error has occured:", error);
        return error;
      });
  };  

  const removeTodo = id => {
    fetch(`${url_API}?records[]=${id}`,{
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        "Content-type": "application/json",
      },      
    })
    .then((res) => res.json())
      .then(() => {
        const newTodoList = todoList.filter(listItem => id !== listItem.id);
        setTodoList(newTodoList);
      })
      .catch((error) => {
        console.error ("Error has occured:", error);
        return error;
      });
  };

  return (
    <div>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/new"
          element={
            <div className={styles.container}>
              <h1 className={styles.headline}>New Todo List</h1>
              <AddTodoForm onAddTodo={addTodo} />
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <TodoList 
                todoList={todoList} 
                onRemoveTodo={removeTodo}
                sortByTitle={sortByTitle}
                sortAZ={sortAZ} />
              )}
            </div>
          }
        ></Route>
        <Route 
        exact path='/'
        element={
          <h1>About</h1>
        }
        ></Route>
      </Routes>      
    </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;
