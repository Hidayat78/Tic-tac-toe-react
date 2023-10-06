import React, { useEffect, useState } from "react";

const CrudApi = () => {
  const [data, setData] = useState([]);
  async function fetchData() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const fetchDataa = await res.json();
      console.log(fetchDataa);
      setData(fetchDataa);
    } catch (error) {
      console.log("JAlsdi wha se hato! Tora Maii k ***** Hto wha se");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1>USer</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CrudApi;    