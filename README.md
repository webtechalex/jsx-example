# JSX

JSX is HTML-like markup that is used inside a JavaScript file.

### JSX is a design choice for React.
JSX is more concise than other methods of writing React components.

With an increasingly interactive web, JavaScript is more commonly used to manipulate the HTML on a web page via the DOM. Since JavaScript is now "in charge of HTML" it makes sense to have a way to mix content and logic. These mixtures of content and logic are what we know as "components" in React. These encapsulations of markup and logic improves separation of concerns because the markup of, say, a sidebar and a form, are isolated from each other, so it is easier and safer to make changes to each of them.
(This has since come full-circle, in that there is a perceived need to be able to reuse logic across components and for that we have hooks.)

JSX looks like HTML, but it is stricter in implementation and can display dynamic info.

### What are the rules of JSX?
1. A JSX tree must have a single root element. This is because a JSX tree (eventually) returns an individual JS object.
2. All tags must be closed explicitly
3. Because JSX turns into JS, attribute names must conform to the rules of JS variable names (HTML attributes that are kebab cased must be camel cased. We can't use JS reserved words, so the className attribute has been invented to replace the HTML class attribute in JSX.) (aria and data attributes do not conform to this rule)

Why do I need to import React from "react" when I'm using JSX, even if I'm not using any properties from React itself?
Because you are, in fact using a property from React when you are using JSX! JSX is syntactic sugar for a call to the function `React.createElement`.

### What is the signature of React.createElement?
`React.createElement` takes the following parameters:
1. The element tag or component to render (element tag represented as a string; component as a reference to a component)
2. An object representing the props, which map to HTML attributes if the element is an HTML tag, or the props of the component if it is a component
3. The children of the component (which can be text or more calls to React.createElement.) Children can be passed as single arguments to `React.createElement` if they are statically known, but they should be passed as an array if they are dynamic.
`React.createElement` returns a Javascript object of a prescribed shape, known as a _React element_.

Incidentally, there is also `React.createFactory` to which you can pass a type (string for HTML elements, or a component reference) and get back a function you can use to create instances of that type:
```javascript
const divBuilder = React.createFactory("div");
const h1Builder = React.createFactory("h1");
const titleDiv = divBuilder(
  { className: "dark-mode"},
  h1Builder({ className: "title" })
);
```

### What is a React element?
An element is a JS object that describes a piece of UI. The act of composing components instructs React to produce a tree of these JS objects (basically one big JS object) that then gets passed to the `render` method of the React root you create at the application entry point. The call to `render` produces the actual markup.

### How does JSX know whether to pass a component to createElement or a string?
This is why the names of React components must start with an upper case letter. It's more than just convention! If a JSX element starts with a lower case letter, the transpiler will take it to be an HTML element and pass it as a string to the first argument of React.createElement. If the JSX element starts upper case then the transpiler knows to look for a component reference to pass in to the function.