"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Note_1 = require("../entity/Note");
var NoteController = /** @class */ (function () {
    function NoteController() {
    }
    NoteController.index = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, notes, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, typeorm_1.createConnection()];
                    case 1:
                        connection = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, , 7]);
                        return [4 /*yield*/, connection
                                .getRepository(Note_1.Note)
                                .createQueryBuilder("note")
                                .select('*')
                                .getRawMany()];
                    case 3:
                        notes = _a.sent();
                        return [4 /*yield*/, connection.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response.json(notes)];
                    case 5:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [4 /*yield*/, connection.close()];
                    case 6:
                        _a.sent();
                        return [2 /*return*/, response.status(500).json({ message: 'Error.' })];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    NoteController.store = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, note, result, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, typeorm_1.createConnection()];
                    case 1:
                        connection = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, , 7]);
                        note = new Note_1.Note();
                        note.title = request.body.title;
                        return [4 /*yield*/, connection.manager.save(note)];
                    case 3:
                        result = _a.sent();
                        return [4 /*yield*/, connection.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response.json(result)];
                    case 5:
                        err_2 = _a.sent();
                        console.log(err_2);
                        return [4 /*yield*/, connection.close()];
                    case 6:
                        _a.sent();
                        return [2 /*return*/, response.status(500).json({ message: 'Error.' })];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    NoteController.show = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, id, note, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, typeorm_1.createConnection()];
                    case 1:
                        connection = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, , 7]);
                        id = request.params.id || 0;
                        return [4 /*yield*/, connection.getRepository(Note_1.Note).findOne(id)];
                    case 3:
                        note = _a.sent();
                        return [4 /*yield*/, connection.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response.json(note)];
                    case 5:
                        err_3 = _a.sent();
                        console.log(err_3);
                        return [4 /*yield*/, connection.close()];
                    case 6:
                        _a.sent();
                        return [2 /*return*/, response.status(500).json({ message: 'Error.' })];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    NoteController.update = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, id, title, note, result, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, typeorm_1.createConnection()];
                    case 1:
                        connection = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 6, , 8]);
                        id = request.params.id || 0;
                        title = request.body.title;
                        return [4 /*yield*/, connection.getRepository(Note_1.Note).findOne(id)];
                    case 3:
                        note = _a.sent();
                        note.title = title;
                        return [4 /*yield*/, connection.manager.save(note)];
                    case 4:
                        result = _a.sent();
                        return [4 /*yield*/, connection.close()];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, response.json(result)];
                    case 6:
                        err_4 = _a.sent();
                        console.log(err_4);
                        return [4 /*yield*/, connection.close()];
                    case 7:
                        _a.sent();
                        return [2 /*return*/, response.status(500).json({ message: 'Error.' })];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    NoteController.destroy = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, id, result, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, typeorm_1.createConnection()];
                    case 1:
                        connection = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, , 7]);
                        id = request.params.id || 0;
                        return [4 /*yield*/, connection
                                .getRepository(Note_1.Note)
                                .createQueryBuilder("note")
                                .where("id = :id", { id: id })
                                .delete()
                                .execute()];
                    case 3:
                        result = _a.sent();
                        console.log(result);
                        return [4 /*yield*/, connection.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response.json(result)];
                    case 5:
                        err_5 = _a.sent();
                        console.log(err_5);
                        return [4 /*yield*/, connection.close()];
                    case 6:
                        _a.sent();
                        return [2 /*return*/, response.status(500).json({ message: 'Error.' })];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    return NoteController;
}());
exports.default = NoteController;
//# sourceMappingURL=NoteController.js.map