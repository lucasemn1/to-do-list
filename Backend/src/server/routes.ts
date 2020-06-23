import { Router } from 'express';
import NoteController from '../app/controllers/NoteController';
import ItemController from '../app/controllers/ItemController';

const routes = Router();

// Notes
routes.get('/notes', NoteController.index);
routes.post('/note', NoteController.store);
routes.get('/note/:id', NoteController.show);
routes.put('/note/:id', NoteController.update);
routes.delete('/note/:id', NoteController.destroy);

//Items
routes.get('/:noteId/items/', ItemController.index);
routes.post('/:noteId/item', ItemController.store);
routes.put('/:noteId/item/:itemId', ItemController.update);
routes.delete('/:noteId/item/:itemId', ItemController.destroy);

export default routes;
