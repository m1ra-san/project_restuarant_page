function loadHome() {
const container = document.querySelector('#content');
container.innerHTML=""
const title = document.createElement("h1");
title.textContent = "ASIAN FOREST";

const subtitleAbout = document.createElement("h2");
subtitleAbout.textContent = "ASIAN FOREST";

const abouttext = document.createElement("p");
abouttext.textContent = "A place where every food is delicacy in the people.Anything are made from our earth-- organic and fresh. It can raw, cooked and burnt anything could be eaten aslong as your stomach decide"

const subtitleHour = document.createElement("h2");
subtitleHour.textContent = "Open Hours";

const hourtext = document.createElement("p");
const hours = [
  "Sunday: 8am - 8pm",
  "Monday: 6am - 6pm",
  "Tuesday: 6am - 6pm",
  "Wednesday: 6am - 6pm",
  "Thursday: 6am - 10pm",
  "Friday: 6am - 10pm",
  "Saturday: 8am - 10pm"
];

hourtext.innerHTML = hours.join('<br>');//br between hours



container.appendChild(title);
container.appendChild(subtitleAbout);
container.appendChild(abouttext);
container.appendChild(subtitleHour);
container.appendChild(hourtext);


}



export default loadHome