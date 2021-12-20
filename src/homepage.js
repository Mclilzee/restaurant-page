function createHomePage() {
  const mainContainer = document.querySelector("#content");

  const header = document.createElement("h1");
  header.textContent = "Welcome to Restauranto";
  header.style.color = "white";

  const description = document.createElement("p");
  description.textContent =
    "This is the finest restaurant in the globe. To find more about our recipes, please press the Orders button.";

  description.style.fontWeight = "bolder";
  description.style.fontSize = "30px";

  mainContainer.appendChild(header);
  mainContainer.appendChild(description);
}

export default createHomePage;
