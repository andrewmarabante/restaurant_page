export function objectiveLoad()
{
    const content = document.getElementById("content");
    const header = document.createElement("h1");
    const burger = document.createElement("img");
    burger.src = '../images/angel.jpg';
    const description = document.createElement("p");

    header.innerHTML = "Our Objective"
    description.innerHTML = "Here at Burger Restaurant, we take pride in giving back to our community by offering up the best burgers we possibly can to our friends, our neighbors, our community."

    content.textContent = '';
    content.appendChild(header);
    content.appendChild(burger);
    content.appendChild(description);
    console.log('Working')
}