export function contactLoad()
{
    const content = document.getElementById("content");
    const header = document.createElement("h1");
    const burger = document.createElement("img");
    burger.src = '../images/phone.png';
    const description = document.createElement("p");

    header.innerHTML = "Contact Us"
    description.innerHTML = "We would absolutely LOVE to hear from you. Let us know what you think of our burgers!!"

    content.appendChild(header);
    content.appendChild(burger);
    content.appendChild(description);
    console.log('Working')
    console.log('Working')
}