import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

const App = () => {
  const [users, setUsers] = useState([
    {
      name: "Abou",
      mail: "ebu1205ed@gmail.com",
      age: 30,
    },
    {
      name: "Derya",
      mail: "dero12@gmail.com",
      age: 22,
    },
  ]);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };
  return (
    <div className="container">
      <h2 className="text-center my-5">Users Panel</h2>
      <Form addUser={addUser} />
      <List users={users} />
    </div>
  );
};

export default App;
