import "./list.css";

export function list(listContent) {
  const container = document.createElement("ul");
  container.setAttribute("class", "commonList");

  listContent.map((content) => {
    const listItem = document.createElement("li");
    listItem.innerText = `${content}`;
    container.append(listItem);
  });

  return container;
}
