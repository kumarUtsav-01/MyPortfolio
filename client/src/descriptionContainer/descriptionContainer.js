import "./descriptionContainer.css";

export function descriptionContainer(index, titleName, description) {
  window.addEventListener("DOMContentLoaded", function () {
    container.style.minHeight = this.window.innerHeight + "px";
  });

  const container = document.createElement("section");
  container.setAttribute("id", titleName);
  container.setAttribute("class", "descriptionContainer");

  const childContainer = document.createElement("div");

  const title = document.createElement("div");
  const descriptionContainer = document.createElement("article");

  const indexTag = document.createElement("span");
  indexTag.setAttribute("class", "titleIndex");
  indexTag.innerText = `0${index}.`;

  const itemTag = document.createElement("span");
  itemTag.setAttribute("class", "titleItem");
  itemTag.innerText = `${titleName}`;

  const line = document.createElement("div");
  line.setAttribute("class", "line");

  description.then((content) => descriptionContainer.append(content));

  title.setAttribute("class", "title");
  title.append(indexTag, itemTag, line);

  childContainer.append(title, descriptionContainer);
  container.append(childContainer);

  return container;
}
