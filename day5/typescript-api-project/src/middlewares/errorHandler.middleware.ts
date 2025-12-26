import type { Request, Response, NextFunction  } from "express";

export const errorHandlerMiddleware = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.log('Hata yakalandi. Error Handler Middleware calisti.');
    console.error(err.stack);
    res.status(500).json({ message: err.message, error: 'Internal Server Error',
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
     });
};