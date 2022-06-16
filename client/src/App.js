import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {

  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [userList, setUserList] = useState([]);

  const addUser = () => {
    Axios.post('http://localhost:3001/create', {
      name: name,
      age: age,
      email: email,
      password: password,
    }).then(() => {
      console.log("Success");
    });
  };

  const getUsers = () => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setUserList(response.data);
    })
  }

  return (
    <div className="App">
      <div className="information">
        <label>Username:</label>
        <input type="text" onChange={(event) => { setName(event.target.value) }} />
        <label>Age:</label>
        <input type="number" onChange={(event) => { setAge(event.target.value) }} />
        <label>Email:</label>
        <input type="email" onChange={(event) => { setEmail(event.target.value) }} />
        <label>Password:</label>
        <input type="text" onChange={(event) => { setPassword(event.target.value) }} />
        <button onClick={addUser}>Add User</button>
      </div>
      <br>
      </br>
      <div className="information">
        <button onClick={getUsers}>List User</button> 
        {userList.map((val, key) => {
          return (
            <div className="user">
              <h3>{val.username}</h3>
              <h3>{val.age}</h3>
              <h3>{val.email}</h3>
              <h3>{val.password}</h3>
            </div>
          );
        })}
      </div> 
    </div>
  )
}

export default App;
