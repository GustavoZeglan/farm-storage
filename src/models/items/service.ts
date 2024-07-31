import prisma from "../../db/db"
import {Item} from "./entity";

const FindItems = async () => {
    return prisma.items.findMany({})
}

const FindItemById = async (id: number) => {
    return prisma.items.findFirst({
        where: {
            id
        }
    })
}

const InsertItem = async (item: Item) => {
    return prisma.items.create({
        data: {
            name: item.name,
            description: item.description,
            quantity: item.quantity,
            type: item.type
        }
    })
}

const DeleteItemById = async (id: number) => {
    return prisma.items.delete({
        where: {
            id
        }
    })
}

const UpdateItemById = async (item: Item) => {
    return prisma.items.update({
        where: {
            id: item.id
        },
        data: {
            name: item.name,
            description: item.description,
            quantity: item.quantity,
            type: item.type,
        }
    })
}

export {
    FindItems,
    InsertItem,
    FindItemById,
    DeleteItemById,
    UpdateItemById
}