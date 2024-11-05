import { useEffect, useState } from "react";

export default function Users() {
    
    //useState && empaty [] is nessesary to use map
    const [users, setUsers] = useState([]);
    

    //to get data from database we will use username and useEffect
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/user/show")
          .then((res) => res.json())
          //using setUsers(data) to transfer data to useState[] of users
          .then((data) => setUsers(data));
    }, [])

    //show data
    const showUsers = users.map((user, index) => (
      //make a unique "key" prop in the first parent in the list
      <tr key={index}>
        <td>{index+1}</td> <td>{user.name}</td> <td>{user.email}</td>
      </tr>
    ));

    return (
      <div style={{ padding: "20px" }}>
        <table>
          <thead>
            <th>ID</th>
            <th>User</th>
            <th>Email</th>
          </thead>
          <tbody>
           
              {showUsers}
              
          </tbody>
        </table>
      </div>
    );
}