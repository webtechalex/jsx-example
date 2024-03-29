import { divBuilder, h1Builder } from "./factories";

export const NoJSXWithFactories = () => {
  return divBuilder(
    { className: "dark-mode"},
    h1Builder({ className: "title" }, "I am a title!")
  );
}