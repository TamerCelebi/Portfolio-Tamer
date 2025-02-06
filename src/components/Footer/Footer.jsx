import React from "react";
import { useUser } from "../../contextAPI/UserContext";

function Footer() {
  const { user } = useUser();
  const contact = user.contact;

  return (
    <footer className="w-full max-w-6xl mx-auto p-10 flex justify-center">
      <div className="flex flex-col md:flex-row items-center justify-between p-6 w-full max-w-3xl rounded-xl">
        <h2 className="text-3xl font-medium text-center">
          Let’s{" "}
          <span className="underline decoration-blue-500">work together</span>{" "}
          on <br />
          your next product.
        </h2>

        <div className="flex flex-col gap-2 mt-4 md:mt-0 text-right">
          <a
            href={`https://${contact.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition font-semibold"
          >
            Github
          </a>
          <a
            href={`https://${contact.personalBlog}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-800 transition font-semibold"
          >
            Personal Blog
          </a>
          <a
            href={`https://${contact.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 transition font-semibold"
          >
            Linkedin
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="text-red-500 hover:text-red-700 transition font-semibold"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
