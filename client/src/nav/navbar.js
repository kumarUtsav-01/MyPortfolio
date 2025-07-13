import { button } from "../button/button";
import { navList } from "../constant/contant";
import hamburgerMenu from "../links/images/hamburgerMenu.svg";
import { generateImage } from "../links/links";

import "./navbar.css";

export function navbar() {
  const wrapper = document.createElement("nav");
  const container = document.createElement("div");
  const hamburgerWrapper = document.createElement("div");
  const hamburgerContainer = document.createElement("div");
  const clearFloatContainer = document.createElement("div");
  let firstNavElement = null;

  wrapper.setAttribute("id", "navWrapper");
  container.setAttribute("id", "navContainer");
  hamburgerWrapper.setAttribute("id", "hamburgerWrapper");
  clearFloatContainer.setAttribute("class", "clearFloatContainer");
  hamburgerContainer.setAttribute("id", "hamburgerContainer");

  navList.reverse().map((item, index) => {
    container.appendChild(navItem(item, navList.length - index));
    if (!firstNavElement) {
      firstNavElement = hamburgerContainer.appendChild(
        navItem(item, navList.length - index, true, wrapper)
      );
    } else {
      firstNavElement = hamburgerContainer.insertBefore(
        navItem(item, navList.length - index, true, wrapper),
        firstNavElement
      );
    }
  });

  container.insertAdjacentElement(
    "afterbegin",
    button("Resume", function () {
      window.open(
        "https://drive.google.com/file/d/1_BhAKLH6Q7dMq4k4ZAbOxm3Sog1WYxAp/view?usp=drive_link",
        "_blank"
      );
    })
  );

  hamburgerContainer.insertAdjacentElement(
    "beforeend",
    button("Resume", function () {
      window.open(
        "https://drive.google.com/file/d/1_BhAKLH6Q7dMq4k4ZAbOxm3Sog1WYxAp/view?usp=drive_link",
        "_blank"
      );
    })
  );

  hamburgerWrapper.appendChild(generateImage(hamburgerMenu, "hamburger menu"));
  hamburgerWrapper.onclick = () => {
    const isWrapperContainerVisible =
      document.getElementById("hamburgerContainer");

    if (isWrapperContainerVisible) {
      wrapper.removeChild(hamburgerContainer);
    } else {
      wrapper.append(hamburgerContainer);
    }
  };

  wrapper.append(container, hamburgerWrapper, clearFloatContainer);
  return wrapper;
}

function navItem(item, index, showHamburgerMenu, wrapperContainer) {
  const container = document.createElement("div");

  const indexTag = document.createElement("span");
  indexTag.setAttribute("class", "navIndex");
  indexTag.innerText = `0${index}.`;

  const itemAnchor = document.createElement("a");
  itemAnchor.setAttribute("class", "navItem");
  itemAnchor.innerText = item;
  itemAnchor.onclick = () => {
    const element = document.getElementById(item);
    element.scrollIntoView(true);

    if (showHamburgerMenu) {
      wrapperContainer.removeChild(hamburgerContainer);
    }
  };

  if (showHamburgerMenu) {
    container.append(itemAnchor);
  } else {
    container.append(indexTag, itemAnchor);
  }

  return container;
}
