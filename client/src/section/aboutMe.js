import "./aboutMe.css";
import { list } from "../list/list";

export function aboutMe({ profileImage, description, resume, skillList }) {
  const container = document.createElement("article");
  container.setAttribute("class", "aboutMeContainer");

  const divContainer = document.createElement("div");
  const paraContainer = document.createElement("article");
  const skillContainer = document.createElement("div");

  divContainer.setAttribute("class", "content");

  paraContainer.innerText = `${description}`;

  skillContainer.append(list(skillList));

  const imageContainer = document.createElement("img");
  imageContainer.setAttribute("src", profileImage);
  imageContainer.setAttribute("class", "image");
  imageContainer.setAttribute("alt", "myProfileImage");

  divContainer.append(paraContainer, skillContainer);

  container.append(divContainer, imageContainer);
  return container;
}
