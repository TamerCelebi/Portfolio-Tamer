import React from "react";

import {
  FaLinkedinIn,
  FaXTwitter,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaTwitch,
  FaDiscord,
} from "react-icons/fa6";

const socialIcons = {
  linkedin: FaLinkedinIn,
  github: FaGithub,
  facebook: FaFacebookF,
  twitter: FaXTwitter,
  x: FaXTwitter,
  instagram: FaInstagram,
  youtube: FaYoutube,
  tiktok: FaTiktok,
  twitch: FaTwitch,
  discord: FaDiscord,
};

function SocialLink({ social }) {
  const link = social.link.toLowerCase();
  const icon = Object.keys(socialIcons).find((key) => link.includes(key));
  const iconName = icon ? icon.charAt(0).toUpperCase() + icon.slice(1) : "";
  return (
    <li>
      <a
        href={link.startsWith("http") ? link : `https://${link}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-blue-500 transition"
        aria-label={`Visit our ${iconName} profile`}
        title={`Visit our ${iconName} profile`}
      >
        {icon &&
          React.createElement(socialIcons[icon], { className: "size-6" })}
      </a>
    </li>
  );
}

export default SocialLink;
