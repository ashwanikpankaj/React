const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "now" },
  "Hello world from React!"
); // takes 3 arguments tag, {}, what to put inside it // {}=> for attribute
 console.log(heading,'heading') //react element is just a javascript object
const root = ReactDOM.createRoot(document.getElementById("root")); // react dom is handling for creating root inside the root

root.render(heading); // react will render this root by using the render api of react
