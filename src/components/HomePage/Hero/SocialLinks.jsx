import React from "react";
import SocialLink from "./SocialLink";

function SocialLinks({ hero }) {
  return (
    <div className="flex flex-col items-center mt-6 ">
      <nav>
        <ul className="flex flex-row justify-center gap-4">
          {hero.socials.map((social, index) => (
            <SocialLink social={social} key={index} />
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default SocialLinks;
