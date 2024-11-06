
import { useEffect, useState } from "react";
import  Axios  from "axios";


export default function Users() {
  //useState && empaty [] is nessesary to use map
  const [users, setUsers] = useState([]);

 
  //to get data from database we will use username and useEffect
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/user/show")
      .then((res) => res.json())
      //using setUsers(data) to transfer data to useState[] of users
      .then((data) => {
        // console.log(data);
        setUsers(data);
      });
    //useEffect
    //بتجيب عدد ال Users
  }, [users]);

  //Delete users
  function deleteUser(id) {
    // i need to use axios because i will post
    Axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`);
  }

  //show data function
  const showUsers = users.map((user, index) => (
    //make a unique "key" prop in the first parent in the list
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <i
          style={{
            fontSize: "20px",
            cursor: "pointer",
            color: "blue",
            marginRight: "30px",
          }}
          className="fa-solid fa-pen-to-square"
        ></i>
        <i
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