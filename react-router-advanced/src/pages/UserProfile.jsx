import React from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { userId } = useParams();
  
  return (
    <div>
      <h2>User Profile</h2>
      <p>Viewing profile for user ID: {userId}</p>
    </div>
  );
};

export default UserProfile;
