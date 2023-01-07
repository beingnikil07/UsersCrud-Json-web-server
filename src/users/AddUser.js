import React, { useState } from "react";

const AddUser = () => {
  // By default sabki initial value set krr di
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  const { name, username, email, phone, website } = user;
  // extracting from user state kyuki state mai he humne svv
  //kuch store karwaya hai
  const onInputChange = (event) => {
    setUser({ [event.target.name]: event.target.value });
    //value param ko input ke name attribute diya kyuki jaise he user kisi field ko change karega to uske
    //corresponding field select ho lega aur wo value store ho legi onchange prr name mai aur show hogi
    //realtime style mai humko
  };
  return (
    <div className="container w-50 my-3">
      <form>
        <h1 className="text-center">Add User</h1>
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
              onInputChange(event); // Passing event data to onInput change
            }}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control my-2 p-2"
            id="exampleInputName"
            aria-describedby="nameHelp"
            placeholder="Enter Your User Name"
            name="username"
            value={username}
            onChange={(event) => {
              onInputChange(event); // Passing event data to onInput change
            }}
          />
        </div>
        <div class="mb-3">
          <input
            type="email"
            class="form-control my-2 p-2"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Your E-mail Address"
            name="email"
            value={email}
            onChange={(event) => {
              onInputChange(event); // Passing event data to onInput change
            }}
          />
        </div>
        <div class="mb-3">
          <input
            type="number"
            class="form-control my-2 p-2"
            id="exampleInputPhone"
            aria-describedby="emailHelp"
            placeholder="Enter Your Phone Number"
            name="phone"
            value={phone}
            onChange={(event) => {
              onInputChange(event); // Passing event data to onInput change
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
              onInputChange(event); // Passing event data to onInput change
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

export default AddUser;
