import { button } from "../button/button";
import "./contactContainer.css";

export function contact() {
  const container = document.createElement("section");
  const title = document.createElement("div");
  const description = document.createElement("p");
  const contactButton = button("Say Hi !!", function () {});

  container.setAttribute("class", "contactContainer");
  title.setAttribute("class", "contactTitle");
  description.setAttribute("class", "description");

  title.innerText = "What now?";
  description.innerText =
    "I am open for new opportunity or collaboration currently. Let's get in touch to discuss more on that.";

  container.append(title, description, contactButton);
  return container;
}
