import "./introduction.css";

export function introduction() {
  window.addEventListener("DOMContentLoaded", function () {
    container.style.minHeight = this.window.innerHeight + "px";
  });

  const container = document.createElement("div");
  container.setAttribute("class", "container");

  const childContainer = document.createElement("div");

  const div1 = document.createElement("p");
  div1.setAttribute("class", "div1");
  div1.innerText = "Hi, my name is";

  const div2 = document.createElement("p");
  div2.setAttribute("class", "div2");
  div2.innerText = "Kumar Utsav";

  const div3 = document.createElement("p");
  div3.setAttribute("class", "div3");
  div3.innerText = "I build things for the web.";

  const div4 = document.createElement("p");
  div4.setAttribute("class", "div4");
  div4.innerText = `A computer science graduate (2019 batch) VIT, Vellore. Enthusiast front-end developer with a couple of years of professional experience. A good team player, always keen to learn something new in tech. Aspire to become an end-to-end developer.`;

  childContainer.append(div1, div2, div3, div4);
  container.append(childContainer);

  return container;
}
