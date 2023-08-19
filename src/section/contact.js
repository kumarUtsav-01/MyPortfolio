import { button } from "../button/button";
import "./contact.css";

export function contact() {
  const container = document.createElement("section");
  const title = document.createElement("div");
  const description = document.createElement("p");
  const contactButton = button("Say Hi !!", function () {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=kumarutsav171@gmail.com",
      "_blank"
    );
  });

  container.setAttribute("class", "contactContainer");
  title.setAttribute("class", "contactTitle");
  description.setAttribute("class", "description");

  title.innerText = "What now?";
  description.innerText =
    "I am open for new opportunity or collaboration currently. Let's get in touch to discuss more on that.";

  container.append(title, description, contactButton);
  return container;
}
