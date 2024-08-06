import Router from "express";
import {GetAllItems, AddItem, GetItemById, DeleteItem, UpdateItem} from "./controller";
import {zodValidator} from "../../middlewares/zodValidator";
import {ItemSchema} from "../../schema/User";
const router = Router();

router.get('/items', GetAllItems);

router.get('/item/:id', GetItemById)

router.post('/item', zodValidator(ItemSchema), AddItem)

router.delete("/item/:id", DeleteItem)

router.put("/item/:id", zodValidator(ItemSchema), UpdateItem)

export  {
    router as default
};