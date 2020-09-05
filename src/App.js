import React,{useState} from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';

const App=() => {
  const [inputText,setInputText]=useState('')
  const [todo,setTodo]=useState([])
  return (
    <div className="App">
     <Header />
     <Form todos={todo} setinput={setInputText} addList={setTodo} inputText={inputText} />
     <TodoList todos={todo} />
     </div>
    );
}

export default App;
