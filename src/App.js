import { Header } from "./components/Header";
// import { Footer } from "./components/Footer";
import { TodoItems } from "./components/TodoItems";
import { Addtodo } from "./components/Addtodo";
import React, { useState , useEffect} from 'react';
import './App.css';

function App() {

  let initodo;
  if (localStorage.getItem("todos")=== null) {
    initodo = [];
  }
  else{
    initodo = JSON.parse(localStorage.getItem("todos"));
  }

  const addtodo = (title , desc)=>{
    console.log("i am adding", title,desc)
    let sno = todos.length + 1;
    const mytodo = {
      sno : sno,
      title : title,
      desc : desc,
    }
    console.log(mytodo)
    settodos([...todos , mytodo]);

  }

  const [todos, settodos] = useState(initodo)
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  const ondelete = (todo)=>{
    console.log("i am ondelete" ,  todo)
    // let indexoftodo1 = todos.indexOf(todo1); // this will not work in react
    // todos.splice(indexoftodo1 , 1);
    settodos(todos.filter((e)=>{
      return e!== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const searching = (ab)=>{
    console.log("calling", ab);
  }

  return (
    <div className="App">
      <Header searching={(ab)=>searching(ab)}/>
      <Addtodo addtodo = {addtodo}/>
      <TodoItems todos = {todos} ondelete = {ondelete}/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
