"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFileExtOnly = exports.getFileNameOnly = void 0;
function getFileNameOnly(fileName) {
    return fileName.split(".")[0];
}
exports.getFileNameOnly = getFileNameOnly;
function getFileExtOnly(fileName) {
    return fileName.split(".")[1];
}
exports.getFileExtOnly = getFileExtOnly;
