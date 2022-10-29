import { useState } from "react";
import "./styles.css";

export default function App() {
  let time = new Date().toLocaleTimeString();
  const [curTime, setCurTime] = useState(time);
  const UpdateTime = () =>{
    let time = new Date().toLocaleTimeString();
    setCurTime(time);
  };
  // using callback function in line number 12
  setInterval(UpdateTime,1000) 
  
  return (
    <div className="App">
      <h1>{curTime}</h1>
      {/* <button onClick={UpdateTime}>get Time</button> */}
    </div>
  );
}
