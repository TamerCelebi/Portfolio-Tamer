import React from "react";
import { useUser } from "../../../contextAPI/UserContext";
import Basicinfos from "./Basicinfos";
import AboutMe from "./AboutMe";

function Profile() {
  const { user } = useUser();
  const info = user.profile;

  return (
    <section className="w-full max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Profile</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-100 p-6 rounded-xl shadow-lg">
        <Basicinfos info={info.basicInformation} />

        <AboutMe info={info.aboutme} />
      </div>
    </section>
  );
}

export default Profile;
