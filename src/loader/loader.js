import "./loader.css";

export function loader() {
  const loader = document.createElement("div");
  loader.setAttribute("id", "loader");

  // center the loader to the window
  const top = document.documentElement.clientHeight / 2 - 60;
  const left = document.documentElement.clientWidth / 2 - 60;

  loader.style.top = top + "px";
  loader.style.left = left + "px";

  return loader;
}
