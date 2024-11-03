import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css';

const Users = () => {

    const users = useLoaderData();
    const userStyle = {
        border: '2px solid gray',
        borderRadius: 20,


    }
    return (
        <div >
            <h1>Our Users: {users.length}</h1>
            <div className="users" style={userStyle}>
                {
                    users.map(user => <User key={user.id} user={user}></User> )
                }
            </div>
        </div>
    );
};

export default Users;