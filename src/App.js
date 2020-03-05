import React, {useState, useEffect, lazy, Suspense} from 'react';
import ToDoList from './todo/TodoList'
//import AddTodo from './todo/AddTodo'
import Loader from './todo/Loader'
import Modal from './modal/modal'
import Context from './context'

const AddTodo = lazy(() => new Promise((resolve)=>{
  setTimeout(() => {
    resolve(import('./todo/AddTodo'))
  }, 4000);
}))
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      completed: false,
      title: 'Купить Джуди Картер'
    },
    {
      id: 2,
      completed: false,
      title: 'Записаться на открытый микрофон'
    },
    {
      id: 3,
      completed: false,
      title: 'Прочесть книгу'
    },
    {
      id: 4,
      title: 45,
      completed: true
    }
  ])
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(response => response.json())
    .then(todosFromServer => {
      setTimeout(() => {
        setTodos(todos.concat(todosFromServer))
        setLoading(false)
      }, 2000);
    })
    
  },[])
  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed;
        }
        return todo;
      })
    )
  }
  const removeTodo = id => {
    setTodos(
      todos.filter(todo => todo.id !== id)
    )
  }
  const addTodo = title => {
    setTodos(todos.concat([{id: todos.length, completed: false, title: title}]))
  }
  return (
    <Context.Provider value={{removeTodo: removeTodo, addTodo}}>
      <div className="wrapper">
        <h1>stand up</h1>
        <Modal/>
        <Suspense fallback={<Loader/>}>
          <AddTodo/>
        </Suspense>
        {
          todos.length ? <ToDoList todos={todos} onToggle={toggleTodo}/> : loading ? null : <p>Все сделано</p>
        }
        {
          loading && <Loader/>
        }
      </div>
    </Context.Provider>
  );
}

export default App;

/*

useEffert когда готово дом дерево

*/