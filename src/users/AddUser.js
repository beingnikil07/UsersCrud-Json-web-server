import React from "react";

const AddUser = () => {
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
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control my-2 p-2"
            id="exampleInputName"
            aria-describedby="nameHelp"
            placeholder="Enter Your User Name"
          />
        </div>
        <div class="mb-3">
          <input
            type="email"
            class="form-control my-2 p-2"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Your E-mail Address"
          />
        </div>
        <div class="mb-3">
          <input
            type="number"
            class="form-control my-2 p-2"
            id="exampleInputPhone"
            aria-describedby="emailHelp"
            placeholder="Enter Your Phone Number"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control my-2 p-2"
            id="exampleInputwebsite"
            aria-describedby="websiteHelp"
            placeholder="Enter Your Website Name"
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
