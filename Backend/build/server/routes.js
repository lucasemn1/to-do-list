"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var NoteController_1 = require("../app/controllers/NoteController");
var ItemController_1 = require("../app/controllers/ItemController");
var routes = express_1.Router();
// Notes
routes.get('/notes', NoteController_1.default.index);
routes.post('/note', NoteController_1.default.store);
routes.get('/note/:id', NoteController_1.default.show);
routes.put('/note/:id', NoteController_1.default.update);
routes.delete('/note/:id', NoteController_1.default.destroy);
//Items
routes.get('/:noteId/items/', ItemController_1.default.index);
routes.post('/:noteId/item', ItemController_1.default.store);
routes.put('/:noteId/item/:itemId', ItemController_1.default.update);
routes.delete('/:noteId/item/:itemId', ItemController_1.default.destroy);
exports.default = routes;
//# sourceMappingURL=routes.js.map