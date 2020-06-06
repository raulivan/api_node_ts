import { Request, Response } from 'express';

class FundamentaisController {
    async somar(request: Request, response: Response) {
        try {
            let resultado= 0;

            if (request.method === 'GET') {
                const num1 = Number(request.query.num1);
                const num2 = Number(request.query.num2);
                resultado = num1 + num2;
            }else{
                const {numeros} = request.body;
                const nums = numeros.map((item: string) =>  Number(item));

                nums.forEach((element:number) => {
                    resultado += element;
                });
            }
            
            response.status(200).json({
                message:'Sucesso',
                result: resultado
            });
        } catch (ex) {
            response.status(400).json({
                message: 'Fallha ao executar a operação', error: ex});
        }
    }

    async multiplicar(request: Request, response: Response) {
        try {
            let resultado= 0;

            if (request.method === 'GET') {
                const num1 = Number(request.query.num1);
                const num2 = Number(request.query.num2);
                resultado = num1 * num2;
            }else{
                const {numeros} = request.body;
                const nums = numeros.map((item: string) =>  Number(item));

                resultado = 1;
                nums.forEach((element:number) => {
                    resultado *= element;
                });
            }
        
            response.status(200).json({
                message:'Sucesso',
                result: resultado
            });
        } catch (ex) {
            response.status(400).json({
                message: 'Fallha ao executar a operação', error: ex});
        }
    }
}
export default FundamentaisController;