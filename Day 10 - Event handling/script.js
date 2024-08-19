//Activity 1: Basic Event Handling
//• Task 1: Add a click event listener to a button that changes the text content of a paragraph.
const para = document.getElementById("para");
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  para.textContent = "Text is changed";
});

//• Task 2: Add a double-click event listener to an image that toggles its visibility.
const image = document.getElementById("image");
image.style.opacity = 1;
image.addEventListener("dblclick", () => {
  image.style.opacity = image.style.opacity == 1 ? 0.1 : 1;
});

//Activity 2: Mouse Events
//• Task 3: Add a mouseover event listener to an element that changes its background color.
const box = document.getElementById("box");
box.addEventListener("mouseover", () => {
  box.style.backgroundColor = "red";
});

//• Task 4: Add a mouseout event listener to an element that resets its background color.
box.addEventListener("mouseout", () => {
  box.style.backgroundColor = "cyan";
});

//Activity 3: Keyboard Events
//• Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
const input = document.getElementById("text");
input.addEventListener("keydown", (e) => {
  console.log(`Pressed key: ${e.key}`);
});

//• Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
input.addEventListener("keyup", (e) => {
  console.log(`Current value: ${e.target.value}`);
});

//Activity 4: Form Events
//• Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const formObject = {};

  formData.forEach((data, key) => {
    formObject[key] = data;
  });
  console.log("Form Data:", formObject);
});

//• Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
const selector = document.getElementById("select");
const option = document.getElementById("option");

selector.addEventListener("change", (e) => {
  option.textContent = `Your selected option: ${e.target.value}`;
});

//Activity 5: Event Delegation
// Task 9: Add a click event to a list that logs the text content of the clicked list item using event delegation.
const list = document.getElementById("myList");

list.addEventListener("click", (e) => {
  if (e.target && e.target.nodeName === "LI") {
    console.log("List item clicked:", e.target.textContent);
  }
});

// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
const parent = document.getElementById("parent");
const addChildButton = document.getElementById("addChild");

// Function to add a new child element
const addChild = () => {
  const newChild = document.createElement("div");
  newChild.className = "child";
  newChild.textContent = `Child ${
    document.querySelectorAll(".child").length + 1
  }`;
  parent.appendChild(newChild);
};

// Add event listener to the parent element
parent.addEventListener("click", (event) => {
  // Check if the clicked element is a dynamically added child element
  if (event.target && event.target.className === "child") {
    console.log("Dynamically added child clicked:", event.target.textContent);
  }
});

// Add click event to the "Add Child" button to dynamically add child elements
addChildButton.addEventListener("click", addChild);
