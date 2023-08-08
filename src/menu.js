export function menuLoad()
{
    const content = document.getElementById("content");
    const header = document.createElement("h1");
    const burger = document.createElement("img");
    burger.src = '../images/menu.jpeg';
    const description = document.createElement("p");

    header.innerHTML = "Our Menu"
    description.innerHTML = "Not An Actual Menu"

    content.textContent = '';
    content.appendChild(header);
    content.appendChild(burger);
    content.appendChild(description);
    console.log('Working')
    console.log('Working')
}