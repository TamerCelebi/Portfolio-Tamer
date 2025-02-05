import React from "react";
import SocialLink from "./SocialLink";

function SocialLinks({ hero }) {
  return (
    <div>
      <nav>
        <ul>
          {hero.socials.map((social, index) => (
            <SocialLink social={social} key={index} />
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default SocialLinks;
