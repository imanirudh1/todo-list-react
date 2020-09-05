import React from 'react'

const Form=({setinput,todos,addList,inputText}) => {
  const inputTextHandeller=(e)=>{
    
    setinput(e.target.value)
  }
  const addTodo=(e) => {
      e.preventDefault();
      addList([...todos, {text:inputText , completed:false, id: Math.random()*1000 } ])
      setinput('')
  }
    return (
        
      <form>
      <input value={inputText} onChange={inputTextHandeller} type="text" className="todo-input" />
      <button className="todo-button" type="submit" onClick={addTodo} >
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>  
       
    )
}

export default Form;
