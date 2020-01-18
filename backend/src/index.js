//  Métodos HTTP: get(pegar) , post(criar) , put(modificar), delete(excluir)
//  Tipos de parâmetros:
//  Query Params: request.query(Filtros, ordenação, paginação, ...)
//  Route Params: request.params (Identificar um recurso na alteração ou remoção)
//  Body: request.body (Dados para criação ou alteração de registros)
// MongoDB (Não-relacional)

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')

const app = express();
mongoose.connect('mongodb+srv://jean:Jean150300@cluster0-vmvtz.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology:true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);