export function homeLoad()
{
    const content = document.getElementById("content");
    const header = document.createElement("h1");
    const burger = document.createElement("img");
    burger.src = '../images/burger.jpg';
    const description = document.createElement("p");

    header.innerHTML = "Some Burger Restaurant"
    description.innerHTML = "Some Burger Restaurant is the best spot to stop and have a juicy, delicious, absolutely scrumptious burger."

    content.textContent = '';
    content.appendChild(header);
    content.appendChild(burger);
    content.appendChild(description);
    console.log('Working')
}