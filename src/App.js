import React, {useState} from "react";
import './App.css';
const App=()=>{
  const[count,setCount]=useState(0);
  return(
    <div className="crement">
      <h1 >{count}</h1> <br/><br/>
      <button id="plus" onClick={()=>setCount(count+1)}>Increment+</button>
      <button  id= "minus" onClick={()=>setCount(count-1)}>Decrement-</button>
    </div>
  )
}
export default App


