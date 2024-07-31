import z, {ZodObject} from "zod";
import {Request, Response, NextFunction} from "express";

const zodValidator = (schema: ZodObject<any>) => (req: Request, res: Response, next: NextFunction) => {
    try {
        schema.parse(req.body);
        return next();
    } catch (e) {
        if (e instanceof z.ZodError) {
            const errors = e.errors.map(er => er.message);
            return res.json({message: "invalid request", status: 400, errors})
        }
        return res.json({message: "An error occurred", status: 400})
    }
}

export {
    zodValidator
}