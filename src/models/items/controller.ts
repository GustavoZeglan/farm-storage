import {Request, Response} from "express";
import {FindItems, InsertItem, FindItemById, DeleteItemById, UpdateItemById} from "./service";
import {Item} from "./entity";

const GetAllItems = async (req: Request, res: Response) => {

    const items: Array<Item> = await FindItems();

    if (!items) return res.status(204).json({message: "You dont have any item inserted", status: 204});

    return res.status(200).json(items);
}

const GetItemById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    if (!id) return res.status(400).json({message: "An unexpected error was occurred", status: 400});

    const item: Item = await FindItemById(id);

    if (!item) return res.status(200).json({message: "That Item not exist", status: 200});

    return res.status(200).json(item);
}

const AddItem = async (req: Request, res: Response) => {
    const {name, description, quantity, type} = req.body;

    const itemI: Item = {
        name,
        description,
        quantity,
        type
    }

    const item: Item = await InsertItem(itemI);

    if (!item) return res.status(500).json({message: "Internal Server Error", status: 500})

    return res.status(201).json(item);
}

const DeleteItem = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    if (!id) return res.status(400).json({message: "An unexpected error was occurred", status: 400});

    const item: Item = await FindItemById(id);

    if (!item) return res.status(200).json({message: "That Item not exist", status: 200});

    const excludedItem: Item = await DeleteItemById(id);

    if (!excludedItem) return res.status(400).json({message: "An unexpected error was occurred", status: 400});

    return res.status(200).json({message: `Item ${excludedItem.id} was excluded with success`, status: 200})
}

const UpdateItem = async (req:Request, res: Response) => {
    const id = Number(req.params.id);


    if (!id) return res.status(400).json({message: "An unexpected error was occurred", status: 400});

    const body: Item = {
        id: id,
        name: req.body.name,
        description: req.body.description,
        quantity: req.body.quantity,
        type: req.body.type
    }

    const item: Item = await FindItemById(id);

    if (!item) return res.status(204).json({message: "That Item not exist", status: 204});

    const updatedItem = await UpdateItemById(body);

    if (!updatedItem) return res.status(400).json({message: "An unexpected error was occurred", status: 400});

    return res.status(200).json({message: `Item ${item.id} was updated with success`, status: 200, data: updatedItem});
}

export {
    GetAllItems,
    AddItem,
    GetItemById,
    DeleteItem,
    UpdateItem
}