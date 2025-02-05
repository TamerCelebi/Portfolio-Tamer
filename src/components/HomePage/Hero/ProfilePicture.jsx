import React from "react";

function ProfilePicture({ user }) {
  return (
    <img
      src={`/assets/${user.heroSection.profileImage} `}
      className="size-[144px] object-cover"
    />
  );
}

export default ProfilePicture;
