import { useState } from "react";

function Button() {
  const [count, setCount] = useState(0);
  const [name,setName] = useState("santhi")

  const handleInc = () => {
    setName("masai")
  };
  const handleDec = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h1>{name}</h1>
      <button onClick={() => handleInc()}>inc</button>
      <button onClick={()=>handleDec()}>Dec</button>
    </>
  );
}

export default Button;

// santhi
// masai

// useState
// useState()
