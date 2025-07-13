import { button } from "../button/button";
import "./contact.css";

export function contact({ email, description }) {
  const container = document.createElement("section");
  const title = document.createElement("div");
  const paragraph = document.createElement("p");
  const contactButton = button("Say Hi !!", function () {
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
      "_blank"
    );
  });

  container.setAttribute("class", "contactContainer");
  title.setAttribute("class", "contactTitle");
  paragraph.setAttribute("class", "description");

  title.innerText = "What now?";
  paragraph.innerText = description;

  container.append(title, paragraph, contactButton);
  return container;
}
