import React, { useState } from "react";

const Crud = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
  });
  const [table, setTable] = useState([]);
  const [editClick, setEditClick] = useState(false);
  const [editIndex, setEditIndex] = useState("");
  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editClick) {
      const tempTable = table;
      console.log(tempTable);
      Object.assign(tempTable[editIndex], input);
      setTable([...tempTable]);
      setEditClick(false);
      setInput({
        name: "",
        email: "",
      });
    } else {
      setTable([...table, input]);
      console.log(input);
      setInput({
        name: "",
        email: "",
      });
    }
  };
  const deleteItem = (i) => {
    const filterData = table.filter((item, index) => index !== i);
    setTable(filterData);
  };
  const handleEdit = (i) => {
    const tempData = table[i];
    setInput({
      name: tempData.name,
      email: tempData.email,
    });
    setEditIndex(i);
    setEditClick(true);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={input.name}
            name="name"
            placeholder="Enter your Name"
            onChange={handleInput}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            value={input.email}
            name="email"
            placeholder="Enter your Name"
            onChange={handleInput}
          />
        </div>
        <button type="submit">{editClick ? "Update" : "Add"}</button>
      </form>
      <div>
        <table>
          <thead>
            <tr>
              <th>NAme</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {table.map((item, i) => (
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <button onClick={() => handleEdit(i)}>Edit</button>
                  <button onClick={() => deleteItem(i)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Crud;
