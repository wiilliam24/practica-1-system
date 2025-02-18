// index.js

// Importamos las funciones desde tasks.js
const { addTask, listTasks, deleteTask, updateTask } = require("./tasks");

// Agregamos tareas
addTask("Aprender Node.js");
addTask("Practicar JavaScript");
addTask("Construir un proyecto");

// Mostramos la lista de tareas
listTasks();

// Actualizamos la segunda tarea (índice 1)
updateTask(1, "Practicar JavaScript avanzado");

// Mostramos la lista de tareas actualizada
listTasks();