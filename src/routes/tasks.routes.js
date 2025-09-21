// src/routes/tasks.routes.js

const express = require('express');
const router = express.Router();

const tasks = [];
let nextId = 1;


router.get('/', (req, res) => {
    return res.json(tasks);
});

// Rota para criar uma nova tarefa
router.post('/', (req, res) => {
    const { title, description } = req.body;

    if (!title) {
        return res.status(400).json({ error: 'O título da tarefa é obrigatório.' });
    }

    const newTask = {
        id: nextId++,
        title,
        description,
        completed: false
    };

    tasks.push(newTask);
    return res.status(201).json(newTask);
});

// Rota para visualizar uma tarefa específica
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const taskId = Number(id);

    const task = tasks.find(t => t.id === taskId);

    if (!task) {
        return res.status(404).json({ error: 'Tarefa não encontrada.' });
    }

    return res.json(task);
});

// Rota para atualizar uma tarefa

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const taskId = Number(id);
    const { title, description, completed } = req.body;

    const taskIndex = tasks.findIndex(t => t.id === taskId);

    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Tarefa não encontrada.' });
    }

    const updatedTask = {
        ...tasks[taskIndex],
        title: title || tasks[taskIndex].title,
        description: description || tasks[taskIndex].description,
        completed: completed !== undefined ? completed : tasks[taskIndex].completed
    };

    tasks[taskIndex] = updatedTask;
    return res.json(updatedTask);
});

// Rota para deletar uma tarefa
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const taskId = Number(id);

    const taskIndex = tasks.findIndex(t => t.id === taskId);

    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Tarefa não encontrada.' });
    }

    tasks.splice(taskIndex, 1);
    return res.status(204).send();
});

module.exports = router;