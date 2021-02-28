import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import AddTodoItem from './components/AddTodoItem';

const App = () => {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Doctors appountemt',
      markComplete: false,
    }, 
    {
      id: 2,
      text: 'Meeting at School',
      markComplete: false,
    },
    {
      id: 3,
      text: 'Food Shopping',
      markComplete: false,
    }
  ]);


  const setComplete = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) { 
        return { ...todo, markComplete: !todo.markComplete}
      } 
      return todo;
    });
    setTodos(updatedTodos);
  }

  const AddNewTodo = (inputText) => {
    const updatedTodos = [...todos, {
      id: todos.length +1,
      text: inputText,
      markComplete: false,
    }];
    setTodos(updatedTodos);
    }


    





  return (
    <div className="container">
      <Header />
      <AddTodoItem AddNewTodo={AddNewTodo}/>
      {todos.length > 0 ? (<TodoList todos={todos} setCompleteFunc={setComplete}/>) : 'No Tasks To Show'}
    </div>
  );
}


   

// <!-- Add dynamic number --> items left
  
// All
// Active 
// Completed

// Clear Completed


export default App;
