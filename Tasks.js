// tasks.js

// Arreglo para almacenar las tareas
let tasks = [];

// Función para agregar una tarea
function addTask(task) {
    tasks.push(task);
    console.log(`✅ Tarea "${task}" agregada.`);
}

// Función para listar todas las tareas
function listTasks() {
    console.log("\n📋 Lista de Tareas:");
    if (tasks.length === 0) {
        console.log("No hay tareas pendientes.");
    } else {
        tasks.forEach((task, index) => console.log(`${index + 1}. ${task}`));
    }
}

// Función para eliminar una tarea por índice
function deleteTask(index) {
    if (index >= 0 && index < tasks.length) {
        let removed = tasks.splice(index, 1);
        console.log(`🗑️ Tarea "${removed}" eliminada.`);
    } else {
        console.log("⚠️ Índice no válido.");
    }
}

// NUEVA FUNCIÓN: Actualizar una tarea existente
function updateTask(index, newTask) {
    if (index >= 0 && index < tasks.length) {
        console.log(`✏️ Tarea "${tasks[index]}" actualizada a "${newTask}".`);
        tasks[index] = newTask;
    } else {
        console.log("⚠️ Índice no válido.");
    }
}

// Exportar funciones
module.exports = { addTask, listTasks, deleteTask, updateTask };

deleteTask()
