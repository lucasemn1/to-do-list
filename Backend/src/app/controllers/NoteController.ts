import { Request, Response } from 'express';
import { createConnection } from 'typeorm';
import { Note } from '../entity/Note';

class NoteController {
    static async index(request: Request, response: Response) {
        const connection = await createConnection();
        const notes = await connection
            .getRepository(Note)
            .createQueryBuilder("note")
            .select('*')
            .getRawMany();
        connection.close();

        return response.json(notes);
    }

    static async store(request: Request, response: Response) {
        const connection = await createConnection();

        const note = new Note();
        note.title = request.body.title;

        const result = await connection.manager.save(note);
        await connection.close();
        return response.json(result);
    }

    static async show(request: Request, response: Response) {
        const connection = await createConnection();

        const id = request.params.id || 0;
        const note = await connection.getRepository(Note).findOne(id);

        await connection.close();
        return response.json(note);
    }

    static async update(request: Request, response: Response) {
        const connection = await createConnection();

        const id = request.params.id || 0;
        const title = request.body.title;
        const note = await connection.getRepository(Note).findOne(id);
        note.title = title;

        const result = await connection.manager.save(note);
        await connection.close();
        return response.json(result);
    }

    static async destroy(request: Request, response: Response) {
        const connection = await createConnection();

        const id = request.params.id || 0;
        const result = await connection
            .getRepository(Note)
            .createQueryBuilder("note")
            .where("id = :id", {id})
            .delete()
            .execute();

        console.log(result);

        await connection.close();
        return response.json(result);
    }
}

export default NoteController;
