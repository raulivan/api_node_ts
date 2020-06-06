//Importando o pacote do express
import express from 'express';
import routes from './routes';

//instanciando o express
const app = express();

//configurando para ele interpretar JSON
app.use(express.json());
//passando para o express o controlador de rotas
app.use(routes);

//colocando o servidor online na porta 3333
app.listen(3333,()=>{
    console.log('servidor online');
});