import React from "react";
import Language from "./Language";
import Theme from "./Theme";

function Header() {
  return (
    <div className="w-full px-6 py-4 flex justify-end items-center gap-4">
      <Theme />
      <Language />
    </div>
  );
}

export default Header;
