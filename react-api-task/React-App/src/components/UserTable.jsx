import { useEffect, useState } from "react";
import "../styles/UserTable.css";

function UserTable(){


    const  [users,setUser] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data))
        .catch((error) => console.error("Error on fetching data:", error));
    },[]);

    return(
        <div className="container">
            <div className="table-box">

        <h3>Users List</h3>

            <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                </tr>
            </thead>

            <tbody>

                {users.map((user) =>

            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>    
            </tr>

                )}

            </tbody>
            </table>

            </div>

        </div>
    );
}

export default UserTable;