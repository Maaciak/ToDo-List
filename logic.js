// Variables
const formInput = document.querySelector(".form-input");
const formButton = document.querySelector(".form-button");
const todoList = document.querySelector(".todo-container ul");

// adding input function
const addInput = (e) => {
  //prevent refreshing page
  e.preventDefault();
  //create and add new li to todoList
  const newLi = document.createElement("li");
  todoList.appendChild(newLi);
  // create new div, add class and append it
  const newDiv = document.createElement("div");
  newDiv.classList.add("todo-div");
  newLi.appendChild(newDiv);
  // get user input, create p, add class and append it
  const userInput = document.createElement("p");
  userInput.textContent = formInput.value;
  userInput.classList.add("todo-p");
  newDiv.appendChild(userInput);
  //add check button and append it
  const checkButton = document.createElement("i");
  checkButton.classList.add("fas", "fa-check");
  newDiv.appendChild(checkButton);
  //add trash button and append it
  const trashButton = document.createElement("i");
  trashButton.classList.add("fas", "fa-trash");
  newDiv.appendChild(trashButton);
  //reset value in input
  formInput.value = "";
};
//Event Listener for  addInput function
formButton.addEventListener("click", addInput);

//checking for delete button
function checkOrDelete(e) {
  const chosedDiv = e.target.parentElement.parentElement;
  // Checking if selected target contains classes check or trash
  if (e.target.classList.contains("fa-check")) {
    //add complete class
    chosedDiv.classList.toggle("completed");
  } else if (e.target.classList.contains("fa-trash")) {
    // Add delete animation
    chosedDiv.classList.add("deleteAnimation");
    // Listen to end of animation and then delete div
    chosedDiv.addEventListener("transitionend", () => {
      chosedDiv.remove();
    });
  }
}
//Event listener for checkOrDelete
todoList.addEventListener("click", checkOrDelete);
