document.querySelector("#create-task-form").addEventListener("submit", (event) => {
  event.preventDefault()
  const taskDescription = document.querySelector("#new-task-description").value;
  buildToDo(taskDescription);

});

function buildToDo(taskDescription){
  const taskList = document.querySelector("#tasks");
  const newTask = document.createElement("li");


 
  const taskDesc = document.createElement("p");

  
  taskDesc.textContent = taskDescription;

  newTask.append(taskDesc);
  taskList.append(newTask);
}