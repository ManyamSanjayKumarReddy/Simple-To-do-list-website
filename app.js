const input = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

addButton.addEventListener("click", function(e) {
  e.preventDefault();
  const task = input.value;
  if(task === "") {
    alert("Please enter a task to add.");
    return;
  }
  input.value = "";
  const taskItem = `<li>${task} <button class="delete-button">Delete</button></li>`;
  taskList.insertAdjacentHTML("beforeend", taskItem);

  const deleteButtons = document.querySelectorAll(".delete-button");
  for(let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", function() {
      this.parentElement.remove();
    });
  }
});
