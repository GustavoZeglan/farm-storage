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
router.get('/items', controller_1.GetAllItems);
router.get('/item/:id', controller_1.GetItemById);
router.post('/item', (0, zodValidator_1.zodValidator)(User_1.ItemSchema), controller_1.AddItem);
router.delete("/item/:id", controller_1.DeleteItem);
router.put("/item/:id", (0, zodValidator_1.zodValidator)(User_1.ItemSchema), controller_1.UpdateItem);
