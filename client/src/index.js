// import { loader } from "./loader/loader";
import { links } from "./links/links";
import { navbar } from "./nav/navbar";
import { introduction } from "./introduction";
import { descriptionContainer } from "./descriptionContainer/descriptionContainer";
import "./index.css";
import { aboutMe } from "./section/aboutMe";
import { experience } from "./section/experience";
import { contact } from "./section/contact";
import { navList } from "./constant/contant";
import { getData } from "./api/fetchData";

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

async function loadDescription(sectionName) {
  const { details: response } = await getData();
  switch (sectionName) {
    case "About":
      return aboutMe({
        ...response.about,
        skillList: response.experience.skillList,
      });

    case "Experience":
      return experience(response.experience);

    case "Work":
      return work();

    case "Contact":
      return contact(response.contact);
  }
}

contentContainer.append(
  introduction(),
  ...navList.reverse().map((section, index) =>
    descriptionContainer(
      index + 1,
      section,
      loadDescription(section).then((content) => content)
    )
  )
);

main.append(contentContainer);
document.body.append(main);
