import express, { request, response } from 'express';
import FundamentaisController from './controllers/funcamendaisController';
import AdminController from './controllers/adminController';

const routes = express.Router();
const fundamentaisController = new FundamentaisController();
const adminController = new AdminController();

routes.get('/somar',fundamentaisController.somar);
routes.post('/somar',fundamentaisController.somar);
routes.post('/login',adminController.login);

routes.get('/multiplicar', function (request, response) {
    try {
        adminController.validar_acessor(request,response,() => {
            fundamentaisController.multiplicar(request,response);
        });
    } catch (ex) {
        response.status(500).send(ex);
    }
});

routes.post('/multiplicar', function (request, response) {
    try {
        adminController.validar_acessor(request,response,() => {
            fundamentaisController.multiplicar(request,response);
        });
    } catch (ex) {
        response.status(500).send(ex);
    }
});

//Construindo a rota localhost:3333/ atendendo via GET
routes.get('/', (request, response) => {
    return response.status(200).json({
        message: 'Servidor Online'
    });
});

export default routes;