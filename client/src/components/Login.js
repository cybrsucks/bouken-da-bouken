// import React, { useState } from "react"
// import Axios from "axios"

// function Login() {
//     const [name, setName] = useState('');
//     const [age, setAge] = useState(0);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const addUser = () => {
//       Axios.post('http://localhost:3001/create', {
//         name: name,
//         age: age,
//         email: email,
//         password: password,
//       }).then(() => {
//         console.log("Success");
//       });
//     };
    

//     return (
//     <div className="information">
//       <label>Username:</label>
//         <input type="text" onChange={(event) => { setName(event.target.value) }} />
//       <label>Age:</label>
//         <input type="number" onChange={(event) => { setAge(event.target.value) }} />
//       <label>Email:</label>
//         <input type="email" onChange={(event) => { setEmail(event.target.value) }} />
//       <label>Password:</label>
//         <input type="text" onChange={(event) => { setPassword(event.target.value) }} />
//       <button onClick={addUser}>Add User</button>
//     </div>
//   )

// }

// export default Login




