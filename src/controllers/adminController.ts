import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const senha_token = 'SenhaSecretaDeGerarOToken';

class AdminController {
    async login(request: Request, response: Response) {
        const { user, password, } = request.body;

        if (user === 'admin' && password === 'admin') {
            const id = Math.random() * 10000;
            console.log(id);
            const jtoken = jwt.sign({ id },
                senha_token,
                {
                    expiresIn: 300 // expira em 5 minutos
                });

            return response.status(200).json({
                message: 'Sucesso',
                token: jtoken
            });
        } else {
            return response.status(401).json({ message: 'Falha de autenticação' });
        }
    }

    async validar_acessor(request: Request, response: Response, continuar: Function) {
        try {
            var token = String(request.headers['x-access-token']);

            if (!token)
                return response.status(401).send({ message: 'Acesso negado.' });

            jwt.verify(token, senha_token, function (err, decoded) {
                if (err)
                    return response.status(403).json({ message: 'Token sem acesso ou inválido.' });
                continuar();
            });
        } catch (ex) {
            response.status(400).json({
                message: 'Informe o Token.',
                error: ex
            });
        }
    }
}
export default AdminController;