
function loadMenu() {
    const container = document.querySelector('#content');
    container.innerHTML = ""
    const title = document.createElement("h1");
    title.textContent = "ASIAN FOREST MEALS 101";

    const des = document.createElement("p");
    des.textContent = "This meals are things that make you like a warrior and look effortlesly fit"


    const subtitle = document.createElement("h2");
    subtitle.textContent = "Breakfast";

    const pande = document.createElement("h3");
    pande.textContent = "Pandesal";

    const pandedes = document.createElement("p");
    pandedes.textContent = "A cheap Life saver. Even one can last you till dinner"

    container.appendChild(title)
    container.appendChild(des)
    container.appendChild(subtitle)
    container.appendChild(pande)
    container.appendChild(pandedes)

}

export default loadMenu