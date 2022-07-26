"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.show = exports.update = exports.create = exports.index = void 0;
var database_1 = __importDefault(require("../database"));
function index(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var result, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, database_1.default.query('SELECT * FROM users ORDER BY id ASC')];
                case 1:
                    result = _a.sent();
                    res.status(200).json(result.rows);
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    console.error(e_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.index = index;
function create(userObj) {
    return __awaiter(this, void 0, void 0, function () {
        var connection, sql, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    console.log("user ==>", userObj);
                    return [4 /*yield*/, database_1.default.connect()];
                case 1:
                    connection = _a.sent();
                    sql = "INSERT INTO users (email,password  , firstname , lastname ) values ($1 , $2 , $3 , $4 , $5) returning *";
                    // const result = await connection.query(sql, [
                    //     userObj.email,
                    //     userObj.password,
                    //     userObj.firstname,
                    //     userObj.lastname,
                    // ])
                    // connection.release()
                    // // res.status(200).json(result?.rows[0])
                    return [2 /*return*/, 0];
                case 2:
                    err_1 = _a.sent();
                    console.error(err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.create = create;
function update(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var connection, result, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, database_1.default.connect()];
                case 1:
                    connection = _a.sent();
                    return [4 /*yield*/, database_1.default.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [req.body.email, req.body.email, req.body.email])];
                case 2:
                    result = _a.sent();
                    connection.release();
                    res.status(200).send("User modified with ID: ".concat(req.body.email));
                    return [3 /*break*/, 4];
                case 3:
                    err_2 = _a.sent();
                    console.error(err_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.update = update;
function show(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_1.default.query('SELECT * FROM users WHERE id = $1', [req.body.id])];
                case 1:
                    result = _a.sent();
                    res.status(200).json(result.rows);
                    return [2 /*return*/];
            }
        });
    });
}
exports.show = show;
function remove(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, result, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id = parseInt(req.params.id);
                    return [4 /*yield*/, database_1.default.query('DELETE FROM users WHERE id = $1', [id])];
                case 1:
                    result = _a.sent();
                    res.status(200).send("User deleted with ID: ".concat(id));
                    return [3 /*break*/, 3];
                case 2:
                    err_3 = _a.sent();
                    console.error(err_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.remove = remove;
