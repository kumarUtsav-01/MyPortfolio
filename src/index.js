// import { loader } from "./loader/loader";
import { links } from "./links/links";
import { navbar } from "./nav/navbar";
import { introduction } from "./introduction";
import { descriptionContainer } from "./descriptionContainer/descriptionContainer";
import "./index.css";
import { aboutMe } from "./section/aboutMe";
import { experience } from "./section/experience";
import { contact } from "./section/contact";

document.body.append(navbar());

const main = document.createElement("main");

main.setAttribute("class", "layout");
main.append(links());

const contentContainer = document.createElement("article");
contentContainer.setAttribute("class", "contentContainer");

contentContainer.onclick = (e) => {
  const hamburgerWrapperContainer =
    document.getElementById("hamburgerContainer");

  if (hamburgerWrapperContainer) {
    hamburgerWrapperContainer.remove();
  }
};

contentContainer.append(
  introduction(),
  descriptionContainer(1, "About", aboutMe()),
  descriptionContainer(2, "Experience", experience()),
  // descriptionContainer(3, "Work", work()),
  descriptionContainer(4, "Contact", contact())
);

main.append(contentContainer);
document.body.append(main);
