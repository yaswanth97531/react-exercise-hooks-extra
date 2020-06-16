import React, { useState, useEffect } from 'react';
import axios from 'axios';

import User from './components/User';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(res.data);
    };

    getUsers();
  }, []);
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {/* write code to show the list of users fetched from above  */}
        {users && users.map((user) => <User key={user.id} user={user} />)}
      </ul>
    </div>
  );
};

export default App;
