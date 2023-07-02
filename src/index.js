const content = document.querySelector("#content");

function createNav(){
    const nav = document.createElement("div");
    const homeButton = document.createElement("button");
    homeButton.textContent = "Home";
    homeButton.id = "home";
    const menuButton = document.createElement("button");
    menuButton.textContent = "Menu";
    menuButton.id = "menu";
    const hoursButton = document.createElement("button");
    hoursButton.textContent = "Hours"
    hoursButton.id = "hours";

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(hoursButton);

    return nav;
}

content.appendChild(createNav());

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const hoursButton = document.querySelector("#hours");