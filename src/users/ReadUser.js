import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

const ReadUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    let result = await axios.get(`http://localhost:3001/users/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <h1 style={{ margin: "10px" }}>
        <i class="fa-solid fa-user fa-xl"></i>View user
      </h1>
      <ul class="list-group">
        <li class="list-group-item">Name:{user.name}</li>
        <li class="list-group-item">User Name:{user.username}</li>
        <li class="list-group-item">Email:{user.email}</li>
        <li class="list-group-item">Phone:{user.phone}</li>
        <li class="list-group-item">Website:{user.website}</li>
      </ul>
    </div>
  );
};
export default ReadUser;
