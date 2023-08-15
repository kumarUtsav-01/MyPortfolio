import "./button.css";

export function button(
  buttonText,
  triggeringFunction,
  tabularNav,
  overrideDefault,
  tabularNavClassList
) {
  const container = document.createElement("div");

  if (tabularNav) {
    container.setAttribute("class", "tabularNavButton");
    if (overrideDefault) {
      container.classList.add(...tabularNavClassList);
    }
  } else {
    container.setAttribute("class", "button");
  }
  container.innerText = buttonText;

  container.addEventListener("click", function () {
    if (typeof overrideDefault !== "undefined" && !overrideDefault) {
      container.setAttribute("class", "tabularNavButtonSelected");
    }
    triggeringFunction();
  });

  return container;
}
