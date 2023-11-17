import prismaClient from "../../prisma";


interface UserProps {
    name: string;
    email: string;
    password: string;

}

class CreateUserService {
    async execute({name, email, password}:UserProps){
        // recebendo os valores name, e-mail e o password
        if(!email){
            throw new Error("E-mail é um campo obrigatório")
        }

        const alreadyExisits = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(alreadyExisits){
            throw new Error('Usuário já cadastrado')
        }

    const user = await prismaClient.user.create({
        // função create grava no banco de dados o data e o select
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
    }
}


export {CreateUserService}