//[2]-----------import---------------------------

//use react hooks(useState& useEffect)
import { useState, useEffect } from 'react';
//use Axios library for http requests
import axios from 'axios';
//import link for update and delete users
import { Link } from 'react-router-dom';

//[1]-------------Users function----------------------------------------
export default function Users() {
  //[3]-------------useState--------------------------------
  //declare state variables
  //useState && empaty [] is nessesary to use map
  //users is an array of users objects to show users in table
  //setUsers is a function to update the state
  const [users, setUsers] = useState([]);

  // using run useEffect to avoid the error of many requests to the server
  //using runUseEffect to To refresh the page after deleting a user
  const [runUseEffect, setRunUseEffect] = useState(0);


  //[4]-------------useEffect--------------------------------
  //to get data from database we will use useEffect
  useEffect(() => {
    // fetch data from your API
    fetch("http://127.0.0.1:8000/api/user/show")
      // parse response to JSON
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      //using setUsers(data) to transfer data to useState[] of users
      //setUsers is a function to update the state
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.error(error));
      
    // empty array means the effect will run only once when the component mounts
    //but here we will use useEffect to get data with fetch and useEffect will run every time the component mounts
  }, [runUseEffect]  );


  //[5]-------------Delete users--------------------------------
  //Delete users
  async function deleteUsers(id) {
    try { //using axios to send a request to the server to delete user
      const res = await axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`)
      //if the request is successful, we will update the state to get the updated data
      if (res.status === 200) {
        // we will get the updated data from server and update the state
        setRunUseEffect((prev) => prev+1);
      }
    } catch (err) {
      console.error(err);
    }
  }

  //[6]-------------show data function--------------------------------
  //show users list 
  //using map function to show users list with id, name and email 
  
  const showUsers = users.map((user, index) => (
   
    //make a unique "key" prop in the first parent in the list
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <Link to={`/dashboard/users/${user.id}`}>
          <i
            style={{
              fontSize: "20px",
              cursor: "pointer",
              color: "blue",
              marginRight: "30px",
            }}
            className="fa-solid fa-pen-to-square"
          ></i>
        </Link>
        <i
          //using delete user function
          //using arrow function because i will use {( )=> deleteUser()} not only {deleteUser}
          onClick={() => deleteUsers(user.id)}
          style={{ fontSize: "20px", cursor: "pointer", color: "red" }}
          className="fa-solid fa-trash"
        ></i>
      </td>
    </tr>
    
 ));

  //[7]-------------return--------------------------------
  return (
    <div style={{ padding: "20px" }}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{showUsers}</tbody>
      </table>
    </div>
  );
  

}

