const content = document.querySelector("#content");

function createTitle(){
    const title = document.createElement("h1");
    title.textContent = "Sean's Fried Chicken!";
    return title
}

function createNav(){
    const nav = document.createElement("div");
    nav.classList.add("nav");
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

content.appendChild(createTitle());
content.appendChild(createNav());

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const hoursButton = document.querySelector("#hours");

const container = document.createElement("div");
container.id = "container";
content.appendChild(container);

function createHome(){
    const wrapper = document.createElement("div");
    const heading = document.createElement("h2");
    heading.textContent = "Welcome to Sean's!";
    wrapper.appendChild(heading);
    const p1 = document.createElement("p");
    p1.textContent = "Craving some of the best fried chicken this side of MA? Come on down to Sean's!";
    const p2 = document.createElement("p");
    p2.textContent = "We have sandwiches that'll take two hands! We have spicy tenders that'll have the fire department called! And we have sides that will put your family's thanksgiving meal to shame!";
    wrapper.appendChild(p1);
    wrapper.appendChild(p2);

    return wrapper;
}

function createMenuItem(dish, price){
    const item = document.createElement("div");
    const food = document.createElement("h3");
    food.textContent = dish;
    item.appendChild(food);
    const priceElement = document.createElement("div");
    priceElement.textContent = `$${price}.00`;
    item.appendChild(priceElement);

    return item;
}

function createMenu(){
    const wrapper = document.createElement("div");
    const heading = document.createElement("h2");
    heading.textContent = "Our delicious menu!"
    wrapper.appendChild(heading);
    wrapper.appendChild(createMenuItem("Chicken Sandwick", 9));
    wrapper.appendChild(createMenuItem("Spicy Tenders", 8));
    wrapper.appendChild(createMenuItem("Fries", 5));
    wrapper.appendChild(createMenuItem("Mac & Cheese", 4));

    return wrapper;
}

function createDay(day, hours){
    const hourElement = document.createElement("div");
    hourElement.textContent = `${day}: ${hours}`;
    hourElement.classList.add("hour");

    return hourElement;
}

function createHours(){
    const wrapper = document.createElement("div");
    const heading = document.createElement("h2");
    heading.textContent = "Weekly hours";
    wrapper.appendChild(heading);
    for(let day of ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']){
        let hours;
        if(day === 'Mon' || day === 'Sun'){
            hours = 'Closed';
        }else{
            hours = '12pm-9pm';
        }
        wrapper.appendChild(createDay(day, hours));
    }


    return wrapper;
}

container.appendChild(createHome());

homeButton.addEventListener("click", () => {
    container.removeChild(container.firstElementChild);
    container.appendChild(createHome());
});

menuButton.addEventListener("click", () => {
    container.removeChild(container.firstElementChild);
    console.log(createMenu());
    container.appendChild(createMenu());
});

hoursButton.addEventListener("click", () => {
    container.removeChild(container.firstElementChild);
    container.appendChild(createHours());
});