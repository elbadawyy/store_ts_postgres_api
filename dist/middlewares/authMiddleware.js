"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAuthToken = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
function verifyAuthToken(req, res, next) {
    try {
        var authorizationHeader = req.headers.authorization;
        var token = authorizationHeader === null || authorizationHeader === void 0 ? void 0 : authorizationHeader.split(' ')[1];
        var decoded = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
        if (req.body.user_id && decoded.user.id !== req.body.user_id) {
            throw new Error('Wrong Token');
        }
        return decoded.users.id;
    }
    catch (error) {
        throw new Error('Authorization failed! ');
    }
}
exports.verifyAuthToken = verifyAuthToken;
