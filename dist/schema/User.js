"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const ItemSchema = zod_1.default.object({
    name: zod_1.default.string().min(4, "O nome precisa de no mínimo 4 caracteres").max(50, "O nome pode ter no máximo 50 caracteres"),
    description: zod_1.default.string(),
    type: zod_1.default.string().min(4, "O tipo precisa de no mínimo 4 caracteres").max(100, "O tipo precisa de no mínimo 4 caracteres"),
    quantity: zod_1.default.number().int("A quantidade deve ser um número inteiro"),
});
exports.ItemSchema = ItemSchema;
