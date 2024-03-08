import React from "react";

const List = ({ users }) => {
  return (
    <table className="table my-4 table-dark table-responsive table-striped table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody data-testid="body">
        {users.map((user) => (
          <tr>
            <td>{user.name}</td>
            <td>{user.mail}</td>
            <td>{user.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default List;
