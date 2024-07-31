"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePassword = void 0;
const bcrypt = require("bcrypt");
const salt = 10;
const generatePassword = (password) => {
    return bcrypt.hashSync(password, salt);
};
exports.generatePassword = generatePassword;
