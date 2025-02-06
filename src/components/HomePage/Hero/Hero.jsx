import React from "react";
import Greetingsinfo from "./Greetingsinfo";
import SocialLinks from "./SocialLinks";
import Cta from "./Cta";
import ProfilePicture from "./ProfilePicture";
import { useUser } from "../../../contextAPI/UserContext";

function Hero() {
  const { user } = useUser();
  const hero = user.heroSection;

  return (
    <div className="w-full max-w-6xl mx-auto p-10 flex flex-col md:flex-row items-center justify-between gap-10 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg">
      <div className="flex flex-col items-start gap-12 max-w-md">
        <Greetingsinfo hero={hero} />
        <SocialLinks hero={hero} />
        <Cta hero={hero} />
      </div>

      <div className="relative">
        <div className="p-2 rounded-2xl bg-pink-500">
          <ProfilePicture user={user} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
