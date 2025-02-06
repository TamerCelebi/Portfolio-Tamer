import React from "react";

function ProfilePicture({ user }) {
  return (
    <img
      src={`/assets/${user.heroSection.profileImage}`}
      className="size-[144px] md:size-[180px] lg:size-[220px] object-cover rounded-xl shadow-xl"
      alt="Profile"
    />
  );
}

export default ProfilePicture;
