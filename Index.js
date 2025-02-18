// index.js

const { addTask, listTasks, deleteTask, updateTask } = require("./tasks");

addTask("Aprender Node.js");
addTask("Practicar JavaScript");
addTask("Construir un proyecto");

listTasks();

updateTask(1, "Practicar JavaScript avanzado");

listTasks();
