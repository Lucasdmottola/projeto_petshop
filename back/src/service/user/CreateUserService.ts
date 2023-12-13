import prismaClient from "../../prisma";


interface UserProps {
    name: string;
    email: string;
    password: string;

}

class CreateUserService {
    async execute({name, email, password}:UserProps){
        // Método assíncrono chamado execute que cria um usuário no banco de dados.
        // recebendo os valores name, e-mail e o password
        if(!email){
            throw new Error("E-mail é um campo obrigatório")
        }

        const alreadyExisits = await prismaClient.user.findFirst({
            // Verificando se já existe um usuário com o mesmo e-mail no banco de dados
            
            where:{
                email: email
            }
        })

        if(alreadyExisits){
            throw new Error('Usuário já cadastrado')
        }

    const user = await prismaClient.user.create({
        // função create do Prisma grava no banco de dados o data e o select
        data:{
            name: name,
            email: email,
            password: password,
        },
        select:{
            id: true, 
            name: true,
            email: true,
        }
    })
    return user
    // retorna o usuário criado
    }
}


export {CreateUserService}