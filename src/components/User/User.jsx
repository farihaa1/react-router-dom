import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, email, phone } = user;
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
        borderRadius: 16,
      }}
    >
      <h2>{name}</h2>
      <p>Email: {email} </p>
      <p> Phone: {phone} </p>
      <Link to={`/user/${id}`}>Show Details</Link>
    </div>
  );
};

export default User;
