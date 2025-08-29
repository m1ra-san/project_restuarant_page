    
function loadMenu() {
    const container = document.querySelector('#content');
    container.innerHTML=""
    const title = document.createElement("h1");
    title.textContent = "ASIAN FOREST MEALS 101";

    const des = document.createElement("p");
    des.textContent = "This meals are things that make you like a warrior and look effortlesly fit"


    container.appendChild(title)
    container.appendChild(des)

}

export default loadMenu