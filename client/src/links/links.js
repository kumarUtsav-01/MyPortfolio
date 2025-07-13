import linkedIn from "./images/linkedin.svg";
import github from "./images/github.svg";
import gmail from "./images/gmail.svg";

import "./links.css";

export function links() {
  const container = document.createElement("aside");
  container.setAttribute("id", "linksContainer");

  container.appendChild(
    generateLink(
      generateImage(linkedIn, "linkedIn"),
      "https://www.linkedin.com/in/kumar-utsav-890828107/"
    )
  );
  container.appendChild(
    generateLink(
      generateImage(github, "github"),
      "https://github.com/kumarUtsav-01"
    )
  );
  container.appendChild(
    generateLink(
      generateImage(gmail, "Gmail"),
      "https://mail.google.com/mail/?view=cm&fs=1&to=kumarutsav171@gmail.com"
    )
  );

  return container;
}

export function generateImage(icon, altText) {
  const image = document.createElement("img");
  image.src = icon;
  image.alt = altText;
  image.setAttribute("class", "socialMediaLink");
  return image;
}

function generateLink(image, url) {
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.appendChild(image);

  return anchor;
}
