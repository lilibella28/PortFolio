import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "<h1>Hello World! <h1/>",
          "<h1>console.log('Hello World')<h1/>",
          "<h1>print('Hola Mundo')",
          "<h1> System.out.println('Hello World!')<h1/>",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;