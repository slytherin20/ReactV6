import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () =>
  React.createElement(
    "div",
    {},
    React.createElement("h1", { id: "logo" }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Brody",
      animal: "Cat",
      breed: "Siemen",
    }),
    React.createElement(Pet, {
      name: "Meridith",
      animal: "Cat",
      breed: "Bengal Cat",
    })
  );

ReactDOM.render(React.createElement(App), document.getElementById("root"));
