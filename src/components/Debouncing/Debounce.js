import axios from "axios";
import React, { useEffect, useState } from "react";

const Debounce = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [editClick, setEditClick] = useState(false);
  const [editedItem, setEditedItem] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://fakestoreapi.com/products");
        setData(res.data);
      } catch (error) {
        console.error("Error");
      }
    };

    fetchData(); // Fetch data on initial render

    const timeoutId = setTimeout(() => {
      setDebouncedSearch(search);
    }, 5000); // Adjust the delay as needed

    return () => {
      clearTimeout(timeoutId); // Cleanup the timeout
    };
  }, [search]);
  // window key + semi colon key for emoji
  // Function to handle input change and update the search state
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  // Filter the data based on the debounced search value
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(debouncedSearch.toLowerCase())
  );
  const handleDelete = (index) => {
    // Filter the data by excluding the item at the specified index
    const updatedData = filteredData.filter((item, i) => i !== index);
    setData(updatedData); // Update the data state with the filtered data
  };
  // const handleInputChange = (e) => {
  //   setSearch(e.target.value);
  // };
  const handleEdit = (index) => {
    setEditedItem(index); // Set the item to edit
  };

  const handleSaveEdit = (index, updatedItem) => {
    // Update the item in the data array
    const newData = data.map((item, i) => (i === index ? updatedItem : item));
    setData(newData);

    setEditedItem(null); // Clear the edited item
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={handleInputChange}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Title</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, i) => (
              <tr key={i}>
                <td>{item.id}</td>
                {/* <td>{item.title.slice(0, 15)}</td> */}
                <td>
                  {editedItem === i ? (
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) => {
                        const updatedItem = { ...item, title: e.target.value };
                        handleSaveEdit(i, updatedItem);
                      }}
                    />
                  ) : item.title.length > 15 ? (
                    `${item.title.slice(0, 15)}...`
                  ) : (
                    item.title
                  )}
                </td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>
                  {editedItem === i ? (
                    <button
                      className="btn btn-success"
                      onClick={() => handleSaveEdit(i, item)}
                    >
                      Save
                    </button>
                  ) : (
                    <>
                      <button
                        className="btn btn-warning m-2"
                        onClick={() => handleEdit(i)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(i)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Debounce;
