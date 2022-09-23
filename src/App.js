import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

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
    <>      
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo}/>
      {isLoading ? (
      <p>Loading...</p>
      ) : (
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
    </>
  );
}

export default App;
