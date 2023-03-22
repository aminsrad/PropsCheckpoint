import React from "react";

const Profile = ({ fullName, bio, profession, image, handleName }) => {
  return (
    <div>
      {fullName}
      <br />
      {bio}
      <br />
      {profession}
      <br />
      {image}
      {handleName}
    </div>
  );
};

export default Profile;
