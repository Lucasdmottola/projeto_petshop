// 

import { Request , Response} from "express";
import { CreateUserService } from "../../service/user/CreateUserService";

class CreateUserController{
    async handle(req: Request, res: Response){ 
      // handle vai ser chamado passando os valores Request e do Response 
      // request: name, e-mail, password
      const { name, email, password } = req.body;
  
      const createUserService = new CreateUserService(); 
      // instanciando a creatuserservice, e após, posso usar os métodos que estão dentro da classe
      
      
  
      const user = await createUserService.execute({
        // função execute vai ser chamada, e os valores abaixo, serão enviados para dentro da função execute 
        name,
        email,
        password,
      });
  
      return res.json(user)
    }
  }
  
  export { CreateUserController } 
  // controller é o meu controlador que vai chamar a service para posteriormente ela enviar a requisição e gravar no banco de dados