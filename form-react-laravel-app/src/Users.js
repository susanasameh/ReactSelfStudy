//import  useState(to reload page)  & useEffect(to get data with fetch) from react 
import { useEffect, useState } from "react";
// import axios to post data 
import Axios from "axios";
import { Link } from "react-router-dom";


export default function Users() {
  //useState && empaty [] is nessesary to use map
  const [users, setUsers] = useState([]);

  //to set when the useEffect is set and fetch data in table to avoid the error of many requests
    const [runUseEffect, setRun] = useState(0);

  //to get data from database we will use useEffect
    useEffect(() => {
      // fetch data from your API
      fetch("http://127.0.0.1:8000/api/user/show")
        // parse response to JSON
        //   .then((res) => res.json())
        //to fix promise rejection
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
    }, [runUseEffect]);

  //Delete users
    async function deleteUser(id) {
        try {
            // i need to use axios because i will post 
            //we should use async &await to avoid the error when deleting a user that does not exist
            const res = await Axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`);
            // using condition to delete the user from the table
            if (res.status === 200) {
                //if the user is deleted, we will reload the page to see the changes
                setRun((prev)=>prev+1); 
               
            }
        } catch (err) {
            console.error(err);
        }
  }

  //function showUsers
  //map function to show data in the page
  const showUsers = users.map((user, index) => (
    //make a unique "key" prop in the first parent in the list

    <tr key={index}>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        {/* handle update fuunction link */}
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
          onClick={() => deleteUser(user.id)}
          style={{ fontSize: "20px", cursor: "pointer", color: "red" }}
          className="fa-solid fa-trash"
          //using arrow function because i will use {( )=> deleteUser()} not only {deleteUser}
        ></i>
      </td>
    </tr>
  ));

  return (
    <div style={{ padding: "20px" }}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{showUsers}</tbody>
      </table>
    </div>
  );
}
    
