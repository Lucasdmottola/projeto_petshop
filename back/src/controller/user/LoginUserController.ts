import { Request , Response} from "express";
import { LoginUserService } from "../../service/user/LoginUserService";



class LoginUserController {
    async handle(req:Request, res:Response){
        const {email, password} = req.body;
        //Extração de dados da requisição: Extrai as propriedades `email` e `password` do corpo da requisição usando `req.body`

        const login = new LoginUserService();
        // Cria uma instância da classe `LoginUserService`, que contém a lógica de autenticação


        const auth = await login.execute({
            // Chama a função `execute` da instância de `LoginUserService`, passando o objeto `{ email, password }` como argumento
            email,
            password
          })
      
          return res.json(auth);

    }
}

export {LoginUserController}