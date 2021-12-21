function about() {
  const mainBox = document.getElementById("content");

  const contactUs = document.createElement("h1");
  contactUs.textContent = "Contact Us";
  contactUs.id = "contactUs";

  const location = createElement("Visit Us", "Restaurant street, 22132, Earth");
  const phone = createElement("Phone Number", "+322(832)23244433");
  const email = createElement("Email", "restauranto@bakinggoods.com");

  mainBox.appendChild(contactUs);
  mainBox.appendChild(location);
  mainBox.appendChild(phone);
  mainBox.appendChild(email);
}

function createElement(name, desc) {
  const container = document.createElement("div");
  container.classList.add("detail-container");

  const title = document.createElement("div");
  title.textContent = name + ":";

  const detail = document.createElement("div");
  detail.textContent = desc;

  container.appendChild(title);
  container.appendChild(detail);

  return container;
}

export default about;
