
const express = require('express');
const tasksRoutes = require('./src/routes/tasks.routes');
const app = express();
const PORT = 3000;


app.use(express.json());

app.use('/tasks', tasksRoutes);

app.get('/', (req, res) => {
    res.send('API de To-Do List funcionando!');
});

//Iniciar o servidor

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});