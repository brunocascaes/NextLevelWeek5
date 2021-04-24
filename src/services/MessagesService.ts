import { response } from "express";
import { getCustomRepository, Repository } from "typeorm"
import { Message } from "../entities/Message";
import { MessagesRepository } from "../repositories/MessagesRepositories"

interface IMessageCreate {
    admin_id?: string, //pode não vir
    text: string,
    user_id: string
}

class MessagesService {
    private messagesRepository: Repository<Message>;

    constructor() {
        this.messagesRepository = getCustomRepository(MessagesRepository);
    }

    async create({ admin_id, text, user_id } : IMessageCreate) {
        const message = this.messagesRepository.create({
            admin_id,
            text,
            user_id
        });

        await this.messagesRepository.save(message);

        return message;
    }

    async listByUser(user_id: string) {
        // retorna tambem todos os dados do usuario
        const list = await this.messagesRepository.find({
            where: { user_id },
            relations: ["user"],
        });

        return list;
    }
}

export { MessagesService }