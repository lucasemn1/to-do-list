import { Request, Response } from "express";
import { createConnection } from "typeorm";
import { Note } from "../entity/Note";
import { Item } from "../entity/Item";

class ItemController {
    static async index(request: Request, response: Response) {
        const noteId = Number.parseInt(request.params.noteId);

        const connection = await createConnection();

        try {
            const note = await connection
                .getRepository(Note)
                .createQueryBuilder('note')
                .leftJoinAndSelect('note.items', 'item')
                .where('note.id = :noteId', { noteId })
                .getMany();

            await connection.close();
            return response.json(note);
        }
        catch (err) {
            console.log(err);
            await connection.close();
            return response.status(500).json({ message: 'Error.' })
        }
    }

    static async store(request: Request, response: Response) {
        const { noteId } = request.params;
        const { value, checked } = request.body;

        const connection = await createConnection();

        try {

            const note = await connection
                .getRepository(Note)
                .findOne(noteId);

            const item = new Item();
            item.value = value;
            item.checked = Boolean(checked);
            item.note = note;

            const result = await connection.manager.save(item);
            await connection.close();

            return response.json(result);
        }
        catch (err) {
            console.log(err);
            await connection.close();
            return response.status(500).json({ message: 'Error.' })
        }
    }

    static async update(request: Request, response: Response) {
        const { noteId, itemId } = request.params;
        const { value, checked } = request.body;

        const connection = await createConnection();

        try {

            await connection
                .createQueryBuilder()
                .update(Item)
                .set({ value, checked })
                .where('item.id = :itemId', { itemId })
                .andWhere('item.noteId = :noteId', { noteId })
                .execute();

            const item = await connection.getRepository(Item).findOne(itemId);
            await connection.close();

            return response.json(item);
        }
        catch (err) {
            console.log(err);
            await connection.close();
            return response.status(500).json({ message: 'Error.' })
        }
    }

    static async destroy(request: Request, response: Response) {
        const connection = await createConnection();

        try {
            const { noteId, itemId } = request.params;

            const item = await connection
                .getRepository(Item)
                .createQueryBuilder()
                .where('item.noteId = :noteId', { noteId })
                .andWhere('item.id = :itemId', { itemId })
                .getOne();

            if (!item) {
                await connection.close();
                return response.status(400).json({ message: 'This operation could not be performed.' });
            }

            const result = await connection.getRepository(Item).delete(item);

            await connection.close();
            return response.json(result);
        }
        catch (err) {
            console.log(err);
            await connection.close();
            return response.status(500).json({ message: 'Error.' })
        }
    }
}

export default ItemController;