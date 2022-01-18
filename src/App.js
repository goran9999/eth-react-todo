import './App.css';
import React from 'react'
import Web3 from 'web3';
import {useEffect,useState,useRef} from 'react'
import {TODO_LIST_ABI,TODO_LIST_ADDRESS} from './config'
import Header from './header/Header';
import TaskForm from './form/TaskForm';
import TaskList from './task/TaskList';
function App() {



  const [account,setAccount] = useState();
  const [todosPendingTasks,setTodosPendingTasks] = useState([]);
  const [todosCompletedTasks,setTodosCompletedTasks] = useState([]);
  const [todo,setTodo] = useState();
  const inputRef=useRef();

  useEffect(()=>{

    configureWeb3();
   
    
  },[])

  const configureWeb3 = async () =>{
    const web3=new Web3(Web3.givenProvider || "127.0.0.1:8545");
    const account= await web3.eth.getAccounts();
    setAccount(account);
    const todoList=new web3.eth.Contract(TODO_LIST_ABI,TODO_LIST_ADDRESS);
    setTodo(todoList);
    const todoCount=await todoList.methods.brojZadataka().call();
    for(let i=1;i<=todoCount;i++){
      console.log('Izvrsavam petlju')
      const task=await todoList.methods.zadaci(i).call();
      if(!task.zavrsen){
      setTodosPendingTasks(prevValue=>[...prevValue,task]);
      }else{
        setTodosCompletedTasks(prevValue=>[...prevValue,task]);
      }
    }
   
  }

  const saveTodo = async (todoText) => {
    await todo.methods.kreirajZadatak(todoText).send({from:account[0]})
    .once('receit',(receit)=>{
    })

    window.location.reload();

  }

  const toggleItem = async (id) => {
    
    const numId=+id;
    await todo.methods.promeniStatusZadatka(id).send({from:account[0]})
    .once('receit',(receit)=>{

    })
    window.location.reload();

  }

  return (
    <div className="App">
      <Header account={account}/>
      <TaskForm onSaveTask={saveTodo}/>
      <TaskList tasks={todosPendingTasks} title="Pending tasks" onToggleItem={toggleItem}/>
      <TaskList tasks={todosCompletedTasks} title="Completed tasks" onToggleItem={toggleItem}/>
     
    </div>
  );
}

export default App;
