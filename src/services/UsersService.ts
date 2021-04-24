import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersService {
    private usersRepository: Repository<User>

    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository);
    }

    async create(email : string) {
        //verificar se o usuario existe
        //Select * from settings where username = "username" limit 1;
        const userExists = await this.usersRepository.findOne({
            email
        })

        //se existir, retornar o user
        if(userExists) {
            return userExists;
        }

        //caso contrario, salvar no banco e retornar novo user
        const user = this.usersRepository.create({
            email
        });

        await this.usersRepository.save(user);

        return user;
    }
}

export { UsersService }