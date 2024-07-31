"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.zodValidator = void 0;
const zod_1 = __importDefault(require("zod"));
const zodValidator = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        return next();
    }
    catch (e) {
        if (e instanceof zod_1.default.ZodError) {
            const errors = e.errors.map(er => er.message);
            return res.json({ message: "invalid request", status: 400, errors });
        }
        return res.json({ message: "An error occurred", status: 400 });
    }
};
exports.zodValidator = zodValidator;
