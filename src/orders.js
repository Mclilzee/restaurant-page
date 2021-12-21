import potatoImage from "./images/potato.jpg";
import lasagnaImage from "./images/lasagna.jpg";
import eggsImage from "./images/eggs.jpg";

function createOrders() {
  const mainBox = document.getElementById("content");

  const potatoDesc =
    "Very delicious potato dish with pepper and all sort of things 5$";

  const lasagnaDesc = "Most delicious lasagna that you will ever taste 9$";

  const eggsDesc = "Not just normal eggs, but the finnest in the country 3$";

  createRecipe(potatoImage, "Image of potato dish", potatoDesc, mainBox);
  createRecipe(lasagnaImage, "Image of lasagna dish", lasagnaDesc, mainBox);
  createRecipe(eggsImage, "Image of eggs dish", eggsDesc, mainBox);
}

function createRecipe(image, alt, desc, container) {
  const elementImage = document.createElement("img");
  elementImage.src = image;
  elementImage.alt = alt;
  elementImage.classList.add("order");

  const elementDesc = document.createElement("p");
  elementDesc.textContent = desc;
  elementDesc.classList.add("desc");

  container.appendChild(elementImage);
  container.appendChild(elementDesc);
}

export default createOrders;
