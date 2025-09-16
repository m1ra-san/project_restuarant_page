console.log("Hello");

import "./style.css";
import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";

const buttons = document.querySelectorAll("button");
home();

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id === "home") {
      home();
    } else if (e.target.id === "menu") {
      menu();
    } else if (e.target.id === "contact") {
      contact();
    }
  });
});
