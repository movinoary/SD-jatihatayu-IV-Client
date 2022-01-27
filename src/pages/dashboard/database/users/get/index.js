import React, {useState, useEffect} from 'react'
import axios from 'axios';

const DatabaseUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);
    

    const getUsers = async () => {
        const response = await axios.get('http://localhost:3210/users');
        setUsers(response.data);
    }

    return (
        <div>
            <button onClick={getUsers} className="button is-info">Get Users</button>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email / username</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DatabaseUsers
