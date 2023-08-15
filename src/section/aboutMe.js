import "./aboutMe.css";
import myImage from "../links/images/myImage.jpg";
import { list } from "../list/list";
import { skillList } from "../constant/contant";

export function aboutMe() {
  const container = document.createElement("article");
  container.setAttribute("class", "aboutMeContainer");

  const divContainer = document.createElement("div");
  const paraContainer = document.createElement("article");
  const skillContainer = document.createElement("div");

  divContainer.setAttribute("class", "content");

  paraContainer.innerText = `I have been a web enthusiast since the time I was completing my undergraduate from VIT University, Vellore. Post completion I joined PwC India where I got the opportunity to work on react and its eco-system. 

    Fast forward to now, I am a senior software engineer in Mindtree India where I am currently working with one of their client in UI domain on building a new product for their costumers.

    My key-skillset includes:`;

  skillContainer.append(list(skillList));

  const imageContainer = document.createElement("img");
  imageContainer.setAttribute("src", myImage);
  imageContainer.setAttribute("class", "image");

  divContainer.append(paraContainer, skillContainer);

  container.append(divContainer, imageContainer);
  return container;
}
