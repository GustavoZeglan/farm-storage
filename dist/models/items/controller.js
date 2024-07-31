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
exports.UpdateItem = exports.DeleteItem = exports.GetItemById = exports.AddItem = exports.GetAllItems = void 0;
const service_1 = require("./service");
const GetAllItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield (0, service_1.FindItems)();
    if (!items)
        return res.status(200).json({ message: "You dont have any item inserted", status: 200 });
    return res.status(200).json(items);
});
exports.GetAllItems = GetAllItems;
const GetItemById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    if (!id)
        return res.status(404).json({ message: "An unexpected error was occurred", status: 404 });
    const item = yield (0, service_1.FindItemById)(id);
    if (!item)
        return res.status(200).json({ message: "That Item not exist", status: 200 });
    return res.status(200).json(item);
});
exports.GetItemById = GetItemById;
const AddItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, quantity, type } = req.body;
    const itemI = {
        name,
        description,
        quantity,
        type
    };
    const item = yield (0, service_1.InsertItem)(itemI);
    if (!item)
        return res.status(500).json({ message: "Internal Server Error", status: 500 });
    return res.status(201).json(item);
});
exports.AddItem = AddItem;
const DeleteItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    if (!id)
        return res.status(404).json({ message: "An unexpected error was occurred", status: 404 });
    const item = yield (0, service_1.FindItemById)(id);
    if (!item)
        return res.status(200).json({ message: "That Item not exist", status: 200 });
    const excludedItem = yield (0, service_1.DeleteItemById)(id);
    if (!excludedItem)
        return res.status(404).json({ message: "An unexpected error was occurred", status: 404 });
    return res.status(200).json({ message: `Item ${excludedItem.id} was excluded with success`, status: 200 });
});
exports.DeleteItem = DeleteItem;
const UpdateItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    if (!id)
        return res.status(404).json({ message: "An unexpected error was occurred", status: 404 });
    const body = {
        id: id,
        name: req.body.name,
        description: req.body.description,
        quantity: req.body.quantity,
        type: req.body.type
    };
    const item = yield (0, service_1.FindItemById)(id);
    if (!item)
        return res.status(200).json({ message: "That Item not exist", status: 200 });
    const updatedItem = yield (0, service_1.UpdateItemById)(body);
    if (!updatedItem)
        return res.status(404).json({ message: "An unexpected error was occurred", status: 404 });
    return res.status(200).json({ message: `Item ${item.id} was updated with success`, status: 200, data: updatedItem });
});
exports.UpdateItem = UpdateItem;
