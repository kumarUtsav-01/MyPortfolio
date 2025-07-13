import { tabularNav } from "../tabularNav/tabularNav";

export function experience(experience) {
  const container = document.createElement("article");
  container.append(tabularNav(experience));

  return container;
}
