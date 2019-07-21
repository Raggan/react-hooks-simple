import React from "react";
import useResources from "./useResources";

const UserList = props => {
  const users = useResources(props.endpoint);

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
