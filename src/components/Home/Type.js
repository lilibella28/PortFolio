import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Hello World!",
          "Software Engineer",
          "Problem Solver",
          "Bilingual",
          "console.log('Hello World')",
          "<h1>print('Hola Mundo')",
          "std::cout << 'Hello World' << std::endl;"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
