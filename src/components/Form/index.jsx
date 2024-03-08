import React from "react";

const Form = ({ addUser }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // create object with the inputs
    const formData = new FormData(e.target);
    const newUser = Object.fromEntries(formData.entries());

    // add user to the table
    addUser(newUser);

    // reset form
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-control"
          placeholder="Abou"
        />
      </div>
      <div className="my-4">
        <label htmlFor="mail">Email</label>
        <input
          type="email"
          id="mail"
          name="mail"
          className="form-control"
          placeholder="abou@gmail.com"
        />
      </div>
      <div className="my-4">
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          className="form-control"
          placeholder="25"
        />
      </div>

      <div className="d-flex align-items-center justify-content-center ">
        <button className="rounded">Add User</button>
      </div>
    </form>
  );
};

export default Form;
