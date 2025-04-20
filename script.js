// Change text content dynamically
const changeTextButton = document.getElementById("changeTextButton");
changeTextButton.addEventListener("click", () => {
    const dynamicText = document.querySelector(".dynamic-text");
    dynamicText.textContent = "The text has been updated dynamically!";
    dynamicText.style.color = "red"; // Modifies CSS style
});

// Add a new element to the container
const addElementButton = document.getElementById("addElementButton");
addElementButton.addEventListener("click", () => {
    const container = document.getElementById("container");
    const newElement = document.createElement("p");
    newElement.textContent = "I'm a new dynamically added element!";
    newElement.classList.add("new-element");
    container.appendChild(newElement);
});

// Remove the last element from the container
const removeElementButton = document.getElementById("removeElementButton");
removeElementButton.addEventListener("click", () => {
    const container = document.getElementById("container");
    if (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
});
