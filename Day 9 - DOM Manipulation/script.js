//Activity 1: Selecting and Manipulating Elements
//• Task 1: Select an HTML element by its ID and change its text content.
const heading = document.getElementById("heading");
heading.textContent = "This is heading after changing text content";

//• Task 2: Select an HTML element by its class and change its background color.
const box = document.getElementsByClassName("box");

Array.from(box).forEach((item) => {
  item.style.backgroundColor = "red";
  item.textContent = "This is a div with background changed to red";
});

//Activity 2: Creating and Appending Elements
//• Task 3: Create a new div element with some text content and append it to the body.
const newEl = document.createElement("h2");
newEl.textContent = "This is an h2 tag created using js";
document.body.appendChild(newEl);

//• Task 4: Create a new li element and add it to an existing ul list.
const newLi = document.createElement("li");
newLi.textContent = "Item - {new}";

const existingList = document.getElementById("list");
existingList.appendChild(newLi);

//Activity 3: Removing Elements
//• Task 5: Select an HTML element and remove it from the DOM.
const toRemove = document.getElementById("remove");
toRemove.remove();

//• Task 6: Remove the last child of a specific HTML element.
const lastItemList = document.getElementById("remove-last");
lastItemList.lastElementChild.remove();

//Activity 4: Modifying Attributes and Classes
//• Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
const image = document.getElementById("image");
image.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1721313859415-706a15eecbed?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
);

//• Task 8: Add and remove a CSS class to/from an HTML element.
const changeClass = document.getElementById("change-class");
changeClass.classList.remove("blue");
changeClass.classList.add("cyan");

//Activity 5: Event Handling
//• Task 9: Add a click event listener to a button that changes the text content of a paragraph.
const text = document.getElementsByClassName("change-text");
const btn = document.getElementsByClassName("btn");

btn[0].addEventListener("click", () => {
  text[0].textContent = "This is changed Text";
});

//• Task 10: Add a mouseover event listener to an element that changes its border color.//
btn[0].addEventListener("mouseover", () => {
  btn[0].style.borderColor = "purple";
});
btn[0].addEventListener("mouseout", () => {
  btn[0].style.borderColor = "green";
});
