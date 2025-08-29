function loadContacts(){
const container = document.querySelector('#content');
container.innerHTML=""

const title = document.createElement('h1');
title.textContent = 'ASIAN FOREST';

const contact = document.createElement('h2');
contact.textContent = 'Contact';

// Contact 1
const firtsContact = document.createElement('h3');
firtsContact.textContent = 'Old Mother';

const firtsContactInfo = document.createElement('p');
firtsContactInfo.innerHTML = `0990000000 <br> Brgy. Kaininan, Kakainin Ka Talaga`;


// Contact 2
const secondContact = document.createElement('h3');
secondContact.textContent = 'Butcher';

const psecondContactInfo = document.createElement('p');
psecondContactInfo.innerHTML = `038784893 <br> Brgy. Wetson, Wetvile`;


container.appendChild(title);
container.appendChild(contact);
container.appendChild(firtsContact);
container.appendChild(firtsContactInfo);
container.appendChild(secondContact);
container.appendChild(psecondContactInfo);

}

export default loadContacts