import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);

  let loadUsers = async () => {
    const result = await axios.get("http://localhost:3001/users");
    setUsers(result.data.reverse()); // To reverse the user list behavior now if you will add some data
    // it will show you top in the list
  };
  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link className="btn btn-primary mx-1 ">View</Link>
                  <Link
                    className="btn btn-outline-primary mx-1"
                    exact
                    to={`/users/edituser/${user.id}`}  
                  >
                    Edit
                  </Link>
                  <Link className="btn btn-danger mx-1">Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
