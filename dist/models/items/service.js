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
exports.UpdateItemById = exports.DeleteItemById = exports.FindItemById = exports.InsertItem = exports.FindItems = void 0;
const db_1 = __importDefault(require("../../db/db"));
const FindItems = () => __awaiter(void 0, void 0, void 0, function* () {
    return db_1.default.items.findMany({});
});
exports.FindItems = FindItems;
const FindItemById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return db_1.default.items.findFirst({
        where: {
            id
        }
    });
});
exports.FindItemById = FindItemById;
const InsertItem = (item) => __awaiter(void 0, void 0, void 0, function* () {
    return db_1.default.items.create({
        data: {
            name: item.name,
            description: item.description,
            quantity: item.quantity,
            type: item.type
        }
    });
});
exports.InsertItem = InsertItem;
const DeleteItemById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return db_1.default.items.delete({
        where: {
            id
        }
    });
});
exports.DeleteItemById = DeleteItemById;
const UpdateItemById = (item) => __awaiter(void 0, void 0, void 0, function* () {
    return db_1.default.items.update({
        where: {
            id: item.id
        },
        data: {
            name: item.name,
            description: item.description,
            quantity: item.quantity,
            type: item.type,
        }
    });
});
exports.UpdateItemById = UpdateItemById;
