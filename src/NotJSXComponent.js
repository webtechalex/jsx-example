import React from "react";

export const NotJSXComponent = () =>
  React.createElement(
    "div",
    { className: "greeting" },
    "Hello, not from JSX!"
  );
