import { button } from "../button/button.js";
import { experienceContainer } from "../experienceContainer/experienceContainer.js";
import {
  workDetailsList,
  designationList,
  companyList,
  durationList,
} from "../constant/contant.js";

import "./tabularNav.css";

export function tabularNav(list) {
  let companyInfoIndex = 0;
  const container = document.createElement("div");
  container.setAttribute("class", "tabularNavWrapper");

  const listContainer = document.createElement("div");
  listContainer.setAttribute("class", "tabularNav");

  function renderCompanyInfo() {
    const companyInfo = experienceContainer(
      companyList[companyInfoIndex],
      designationList[companyInfoIndex],
      durationList[companyInfoIndex],
      workDetailsList[companyInfoIndex]
    );

    if (descriptionContainer.firstChild) {
      descriptionContainer.removeChild(descriptionContainer.firstChild);
    }

    descriptionContainer.append(companyInfo);
  }

  function renderCompanyButtons() {
    const listButtons = list.map((listItem, index) =>
      button(
        listItem,
        function () {
          companyInfoIndex = index;
          renderCompanyInfo();
          renderCompanyButtons();
        },
        true,
        true,
        index === companyInfoIndex ? ["overrideButtonSelect"] : []
      )
    );

    listContainer.replaceChildren(...listButtons);
  }

  const descriptionContainer = document.createElement("article");
  descriptionContainer.setAttribute("class", "tabularNavDescriptionContainer");

  renderCompanyInfo();
  renderCompanyButtons();

  container.append(listContainer, descriptionContainer);

  return container;
}
