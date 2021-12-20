import "./style.css";
import createHomePage from "./homepage.js";

function recreate() {
  document.body.removeChild(document.querySelector("#content"));

  const mainBox = document.createElement("div");
  mainBox.id = "content";

  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add(".buttons-container");

  const homepageButton = document.createElement("button");
  homepageButton.textContent = "Home";
  homepageButton.addEventListener("click", () => {
    recreate();
    createHomePage();
  });

  const aboutButton = document.createElement("button");
  aboutButton.textContent = "About";

  const ordersButton = document.createElement("button");
  ordersButton.textContent = "Orders";

  buttonsContainer.appendChild(homepageButton);
  buttonsContainer.appendChild(ordersButton);
  buttonsContainer.appendChild(aboutButton);

  mainBox.appendChild(buttonsContainer);
  document.body.appendChild(mainBox);
}

recreate();
createHomePage();
