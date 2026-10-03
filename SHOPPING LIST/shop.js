//DOM SELECTORS - SINGLE ELEMENT

//document.getElementById()

console.log(document.getElementById(`app-title`));
console.log(document.getElementById(`app-title`).id);

//to get all the attributes we can use getAttribute
console.log(document.getElementById(`app-title`).getAttribute(`id`));

//TO SET ATTRIBUTE

document.getElementById(`app-title`).id = `new-id`;

document.getElementById(`new-id`).title = `Shopping list`;

//by using set attribute we can write this as

//document.getElementById("app-title").setAttribute(`class`, `title`);

const heading = document.getElementById(`new-id`);
//console.log(heading);

//get or change the content within that element

//console.log(heading.textContent); //this will help to get  the element inside the tag

//heading.textContent = `HELLO WORlD`;

heading.innerHTML = `<strong> SHOPPING LIST </strong>`;

// TO CHANGE STYLES

heading.style.color = `red`;

console.log(heading);

//document.querySelector
