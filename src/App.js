import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText]=useState("");

useEffect(()=>{
document.title=text
},[text])

  console.log("Component rendering");

  return <button onClick={()=> setCount(count=>count+1)}>I have been clicked {count} times
  <input 
  type="text"
  placeholder="type"
  value={text}
  onChange={(e)=>setText(e.target.value)}
  />
  </button>;
}

export default App;
