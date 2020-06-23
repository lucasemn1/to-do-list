import { Request, Response } from 'express';
import { createConnection } from 'typeorm';
import { Note } from '../entity/Note';

class NoteController {
    static async index(request: Request, response: Response) {
        const connection = await createConnection();

        try {
            const notes = await connection
                .getRepository(Note)
                .createQueryBuilder("note")
                .select('*')
                .getRawMany();

            await connection.close();
            return response.json(notes);
        }
        catch (err) {
            console.log(err);
            await connection.close();
            return response.status(500).json({ message: 'Error.' })
        }
    }

    static async store(request: Request, response: Response) {
        const connection = await createConnection();

        try {
            const note = new Note();
            note.title = request.body.title;

            const result = await connection.manager.save(note);
            await connection.close();
            return response.json(result);

        }
        catch (err) {
            console.log(err);
            await connection.close();
            return response.status(500).json({ message: 'Error.' })
        }
    }

    static async show(request: Request, response: Response) {
        const connection = await createConnection();

        try {
            const id = request.params.id || 0;
            const note = await connection.getRepository(Note).findOne(id);

            await connection.close();
            return response.json(note);
        }
        catch (err) {
            console.log(err);
            await connection.close();
            return response.status(500).json({ message: 'Error.' })
        }
    }

    static async update(request: Request, response: Response) {
        const connection = await createConnection();

        try {
            const id = request.params.id || 0;
            const title = request.body.title;
            const note = await connection.getRepository(Note).findOne(id);
            note.title = title;

            const result = await connection.manager.save(note);
            await connection.close();
            return response.json(result);
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
            const id = request.params.id || 0;
            const result = await connection
                .getRepository(Note)
                .createQueryBuilder("note")
                .where("id = :id", { id })
                .delete()
                .execute();

            console.log(result);

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

export default NoteController;
