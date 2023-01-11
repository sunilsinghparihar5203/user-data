import React, {useState} from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';


function App() {
  const [users, setUsers] = useState([])

  const addUsersHandler=(uName,uAge)=>{
      setUsers((prevUsers)=>{
        return [...prevUsers,{id:Math.random().toString(16).slice(2),name:uName,age:uAge}]
      })

      console.log(users)
  }

  return (
    <div className="App">
      <AddUser onAddUsers={addUsersHandler}/>
      <UserList users={users} />
    </div>
  );
}

export default App;
