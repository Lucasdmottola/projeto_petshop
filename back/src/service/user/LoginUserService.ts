import prismaClient from "../../prisma";

interface LoginProps {
    // Uma interface TypeScript chamada `LoginProps` é definida para tipar os parâmetros esperados pelo método `execute`. 
    // Essa interface especifica que um objeto deve ter as propriedades `email` e `password`, ambas do tipo string.

    email: string;
    password: string;
}


class LoginUserService {
    async execute({ email, password }: LoginProps) {
        const user = await prismaClient.user.findFirst({
        //  O método faz uma consulta ao banco de dados usando o `prismaClient`. 
        // Ele procura por um usuário onde o email e a senha correspondem aos valores fornecidos.

            where: {
                email: email,
                password: password
            },
            select:{
                name:true,
            }
        })

        if (!user) {
            throw new Error('Login ou senha, incorretos')
        }

        return user
    }
}
export { LoginUserService }