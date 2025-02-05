import React from "react";

function Greetingsinfo({ hero }) {
  return (
    <div>
      <h4>{hero.greeting}</h4>
      <h3>{hero.intro}</h3>
    </div>
  );
}

export default Greetingsinfo;
