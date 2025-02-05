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
    <div>
      <div>
        <Greetingsinfo hero={hero} />
        <SocialLinks hero={hero} />
        <Cta hero={hero} />
      </div>
      <div>
        <ProfilePicture user={user} />
      </div>
    </div>
  );
}

export default Hero;
