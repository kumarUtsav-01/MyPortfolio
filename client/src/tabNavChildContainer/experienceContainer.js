import { list } from "../list/list.js";
import "./experienceContainer.css";

export function experienceContainer(
  companyName,
  designation,
  duration,
  details
) {
  const container = document.createElement("section");
  const companyNameAndDesignation = document.createElement("div");
  const durationContainer = document.createElement("div");
  const detailsContainer = document.createElement("div");

  companyNameAndDesignation.setAttribute("class", "companyNameAndDesignation");
  durationContainer.setAttribute("class", "");
  detailsContainer.setAttribute("class", "");

  companyNameAndDesignation.innerHTML = `${designation} @ <span class="companyName">${companyName}</span>`;
  durationContainer.innerText = `${duration}`;
  detailsContainer.appendChild(list(details));

  container.append(
    companyNameAndDesignation,
    durationContainer,
    detailsContainer
  );

  return container;
}
