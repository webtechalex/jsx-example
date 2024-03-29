import React from "react";
import { JSXComponent } from "./JSXComponent";

export const NotJSXUsingComponent = () =>
  React.createElement(
    JSXComponent,
    { greeting: "Hello from createElement!"}
  );
