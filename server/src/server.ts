import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import { errors } from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// Rota: Endereço completo da requisição
// Recurso : Qual entidade estamos acessndo do sistema

// GET:  Buscar uma ou mais informações do back-end
// POST: Criar uma nova informanção no back-end
// PUT: Atualizar uma informçaão existente no back-end
// DELETE: Remover uma informação do back-end

// POST http://localhost:3333/users = Criar um ususário
// GET htttp://localhost:3333/users = Listar ususários
// GET http://localhost:3333/users/5 = Buscar dados do ususário com ID 5

// Request Param: Parâmentros que vem na propria rota que identificam um recurso
// Query Param: Parametros que vem na propria rota geralmente opcionais para filtros, paginação
// Request Body: Parametros para criação/atualização de informação

// SELECT * FROM users WHERE name = 'Diego'
// knex('users').where('name', 'Diego').select('*')

const users = [
    'Diego',
    'Cleiton',
    'Robson',
    'Daniel'
];

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.use(errors());

app.listen(3333);