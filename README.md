# API de Lista de Tarefas (To-Do List)

Este é um projeto de API RESTful simples construído com **Node.js** e **Express.js** para gerenciar uma lista de tarefas.

## Funcionalidades

A API oferece os seguintes endpoints para manipular as tarefas:

* `GET /tasks`: Retorna todas as tarefas.
* `POST /tasks`: Cria uma nova tarefa.
* `GET /tasks/:id`: Retorna uma tarefa específica pelo ID.
* `PUT /tasks/:id`: Atualiza uma tarefa existente pelo ID.
* `DELETE /tasks/:id`: Deleta uma tarefa pelo ID.

## Tecnologias Utilizadas

* **Node.js**
* **Express.js**

## Como Rodar o Projeto

1.  Clone este repositório para a sua máquina.
2.  Abra o terminal na pasta do projeto e instale as dependências:
    ```bash
    npm install
    ```
3.  Inicie o servidor em modo de desenvolvimento:
    ```bash
    npm run dev
    ```

A API estará disponível em `http://localhost:3000`.

## Teste dos Endpoints

Você pode usar ferramentas como o [Postman](https://www.postman.com/) ou [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) para testar os endpoints.