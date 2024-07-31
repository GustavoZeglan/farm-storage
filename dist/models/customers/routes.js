"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
const express_1 = __importDefault(require("express"));
const controller_1 = require("./controller");
const zodValidator_1 = require("../../middlewares/zodValidator");
const User_1 = require("../../schema/User");
const router = (0, express_1.default)();
exports.default = router;
router.post('/user', (0, zodValidator_1.zodValidator)(User_1.UserSchema), controller_1.GetUserByEmail);
router.post('/signup', (0, zodValidator_1.zodValidator)(User_1.UserSchema), controller_1.SignUp);
