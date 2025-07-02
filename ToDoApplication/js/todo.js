function addTask() {
  // Get the input value and create a new list item
  const taskInput = document.getElementById("todo-input");
  const taskText = taskInput.value.trim();
  console.log("Adding task:", taskText);

  // Validate input
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  // Create a new list item with the task text and delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete-btn";

  const li = document.createElement("li");
  li.className = "todo-item-list";

  const span = document.createElement("span");
  span.className = "todo-item-list-text";
  span.style.padding = "10px";
  span.textContent = taskText;
  span.onclick = function () {
    this.classList.toggle("completed");
    // Toggle the completed class on the span element
    console.log("Task completed:", this.textContent);
    deleteButton.classList.toggle("completed");

    console.log("Task toggled:", this.textContent);
  };

  // Create delete button

  deleteButton.onclick = function () {
    console.log("Deleting task:", this.parentElement.textContent);
    li.remove();
  };
  li.appendChild(span);
  li.appendChild(deleteButton);

  const todoList = document.getElementById("todo-list");
  todoList.appendChild(li);

  taskInput.value = ""; // Clear input field
}
