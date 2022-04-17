import React, { useState } from "react";
import TodoItem from "./TodoItem";
export const Todo = () => {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);
  const [todoCounter, setTodoCounter] = useState(1);
  const [isAuth,setisAuth] = useState(false)
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const handleLast = () => {
    setTodoCounter((prev) => prev + 1);
    let newTask = {
      title: task,
      id: todoCounter,
    };
    setTodo([...todo, newTask]);
    // todo.push(task)
    // setTodo(todo)
  };
  const handleFirst = () => {
    setTodoCounter((prev) => prev + 1);

    let newTask = {
      title: task,
      id: todoCounter,
    };
    setTodo([newTask, ...todo]);
  };
  const handleDelete = (id) => {
    const newTodo = todo.filter((item) => item.id !== id);
    setTodo(newTodo);
  };
  console.log(todo, "todo");
  const handleLogin = ()=>[
      setisAuth(true)
  ]
  const handleLogout = ()=>{
      setisAuth(false)
  }
  if(!isAuth){
      return <h1>Usenot logged in <button onClick={handleLogin}>Login</button></h1>
  }
  return (
    <>
    {isAuth && <button onClick={handleLogout}>Logout</button>}
      <h1>Todo</h1>
      <input
        type={"text"}
        value={task}
        placeholder="enter todo name"
        onChange={handleChange}
      />
      <button onClick={() => handleFirst()}>Add to First</button>
      <button onClick={() => handleLast()}>Add to Last</button>
      {todo.length ? (
        <table style={{margin:"auto" }}>
          <thead>
            <tr>
              <th>Id</th>
              <th>task name</th>
              <th>Comment</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {todo.map((item, index) => {
              return (
                <TodoItem
                  item={item}
                  handleDelete={handleDelete}
                //   key={item.id}
                  isHidden = {index%2===0}
                />
              );
            })}
          </tbody>
        </table>
      ) : (
        <h1>no Tasks Found</h1>
      )}
    </>
  );
};

// synthetic event

// todo.push("task1")
// [...todo,'task1']

// higherorder function
// spread operator
// es6
//
