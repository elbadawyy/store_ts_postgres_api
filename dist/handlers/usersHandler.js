"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.create = void 0;
var usersController = __importStar(require("../controllers/usersController"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// const index = async (req: Request, res: Response) => {
//     try {
//       const { username } = req.body
//       try {
//         const uName = await User.show(verifyAuthToken(req, username))
//         if (!uName) {
//           return res.status(401).json('Invalid user id ' + username)
//         }
//       } catch (err) {
//         return res.status(401).json((err as Error).message)
//       }
//       const users = await User.index()
//       return res.status(200).json(users)
//     } catch (err) {
//       return res.status(401).json((err as Error).message)
//     }
//   }
function create(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, email, password, firstname, lastname, user, token, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, email = _a.email, password = _a.password, firstname = _a.firstname, lastname = _a.lastname;
                    //   if (!firstname || !lastname || !username || !password) {
                    //     return res.status(400).json("Missing one or more user's info")
                    //   }
                    !email && !(email === null || email === void 0 ? void 0 : email.length) && !password && !(password === null || password === void 0 ? void 0 : password.length)
                        && !firstname && !firstname.length && !lastname && !(lastname === null || lastname === void 0 ? void 0 : lastname.length)
                        && res.status(422).json({ "error": "make sure you send all these parameters firstname,lastname,email,password" });
                    return [4 /*yield*/, usersController.create(req.body)];
                case 1:
                    user = _b.sent();
                    token = jsonwebtoken_1.default.sign({ user: user }, process.env.JWT_SECRET);
                    return [2 /*return*/, res.status(200).json({ token: token, userInfo: user })];
                case 2:
                    err_1 = _b.sent();
                    return [2 /*return*/, res.status(422).json(err_1.message)];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.create = create;
//   const show = async (req: Request, res: Response) => {
//     try {
//       const { username } = req.params
//       //const { username } = req.body
//       if (!verifyAuthToken(req, username)) {
//         return res.status(400).json('Invalid user id ' + username)
//       }
//       const users = await User.show(username)
//       if (users) {
//         return res.status(200).json(users)
//       } else {
//         return res.status(400).json('no user found with id ' + username)
//       }
//     } catch (err) {
//       return res.status(400).json((err as Error).message)
//     }
//   }
