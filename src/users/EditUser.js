import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const EditUser = () => {
 let navigate=useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  //destructuring from state 
  const {name, username, email, phone, website } = user;
  const onInputChange = (event) => {
    setUser({...user,[event.target.name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault(); 
    await axios.post("http://localhost:3001/users", user); 
    navigate("/");
  };

  return (
    <div className="container w-50 my-3">
      <form onSubmit={(event) => onSubmit(event)}>
          <h1 className="text-center">Edit User</h1>
        <div className="mb-3">
          <input
            type="text"
            className="form-control my-2 p-2"
            id="exampleInputName"
            aria-describedby="nameHelp"
            placeholder="Enter Your Name"
            name="name"
            value={name}
            onChange={(event) => {
              onInputChange(event); 
            }}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control my-2 p-2"
            id="exampleInputusername"
            aria-describedby="usernameHelp"
            placeholder="Enter Your User Name"
            name="username"
            value={username}
            onChange={(event) => {
              onInputChange(event); 
            }}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control my-2 p-2"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Your E-mail Address"
            name="email"
            value={email}
            onChange={(event) => {
              onInputChange(event);
            }}
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control my-2 p-2"
            id="exampleInputPhone"
            aria-describedby="phoneHelp"
            placeholder="Enter Your Phone Number"
            name="phone"
            value={phone}
            onChange={(event) => {
              onInputChange(event); 
            }}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control my-2 p-2"
            id="exampleInputwebsite"
            aria-describedby="websiteHelp"
            placeholder="Enter Your Website Name"
            name="website"
            value={website}
            onChange={(event) => {
              onInputChange(event); 
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100 p-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditUser;
