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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUp = exports.GetUserByEmail = void 0;
const service_1 = require("./service");
const GeneratePassword_1 = require("../../utils/GeneratePassword");
const GetUserByEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    const user = yield (0, service_1.FindUserByEmail)(email);
    if (!user)
        return res.status(404).json({ error: "An unexpected error was occurred", status: 404 });
    return res.status(200).json(user);
});
exports.GetUserByEmail = GetUserByEmail;
const SignUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    const newPassword = yield (0, GeneratePassword_1.generatePassword)(password);
    const user = yield (0, service_1.InsertUser)(name, email, newPassword);
    if (!user)
        return res.status(500).json({ message: "Internal Server Error", status: 500 });
    return res.status(200).json(user);
});
exports.SignUp = SignUp;
