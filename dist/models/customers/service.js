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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertUser = exports.FindUserByEmail = void 0;
const db_1 = __importDefault(require("../../db/db"));
const FindUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    return db_1.default.user.findFirst({
        where: {
            email: email
        }
    });
});
exports.FindUserByEmail = FindUserByEmail;
const InsertUser = (name, email, password) => __awaiter(void 0, void 0, void 0, function* () {
    return db_1.default.user.create({
        data: {
            name,
            email,
            password
        }
    });
});
exports.InsertUser = InsertUser;
