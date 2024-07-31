import z from "zod";

const ItemSchema = z.object({
    name: z.string().min(4, "O nome precisa de no mínimo 4 caracteres").max(50, "O nome pode ter no máximo 50 caracteres"),
    description: z.string(),
    type: z.string().min(4, "O tipo precisa de no mínimo 4 caracteres").max(100,"O tipo precisa de no mínimo 4 caracteres"),
    quantity: z.number().int("A quantidade deve ser um número inteiro"),
})

export {
    ItemSchema
}