import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ChildA from './components/ChildA';

function App() {
  const[name,setName]=useState("")
  const[age,setAge]=useState("")
  return (
    <>
    <input placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} type="text"/>
    <input placeholder='Enter Age' type="number" onChange={(e)=>setAge(e.target.value)}/>
    <ChildA name={name} age={age}/>
    </>
  );
}

export default App;
