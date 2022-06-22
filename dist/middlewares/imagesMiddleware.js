"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
var fs_1 = __importDefault(require("fs"));
function validateRequest(req, res, next) {
    if (req.query &&
        req.query.image_name &&
        req.query.width &&
        !isNaN(Number(req.query.width)) &&
        req.query.hieght &&
        !isNaN(Number(req.query.hieght))) {
        if (fs_1.default.existsSync(process.cwd() + "/src/assets/" + req.query.image_name)) {
            next();
        }
        else {
            res.status(404).send("File Not Found");
        }
    }
    else {
        res.status(422).send("Fill these required value(image_name,width,hieght)");
    }
}
exports.validateRequest = validateRequest;
