import React from "react";

const TodoItem = ({item, handleDelete,isHidden}) => {
  
  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.title}</td>
      <td>
        <input type="text" />
      </td>
      <td>
        <button onClick={() => handleDelete(item.id)}>Delete</button>
      </td>
    </tr>
  );
};
export default TodoItem;
