import logo from './logo.svg';
import './App.scss';
import { useState } from 'react';

function App() {
const   [state,SetState]=useState(true);
const   [stateCl,SetStateCl]=useState('bbb');
let  aa="aaa";
const  bb="bbb";
  return (
    <div className="App">
     <div className={` ${stateCl}`} onClick={()=>{
       SetState(!state);
       if(state)
       {
        SetStateCl('bbb')
       }else
       SetStateCl('aaa')
       console.log(state);
     }}>Haim</div>
    {state?`TRUE${aa}`:"FALSE"} </div>
  );
}

export default App;
