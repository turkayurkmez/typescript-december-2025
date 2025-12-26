import type {  Request, Response, NextFunction  } from "express";
import { error } from "node:console";

export const authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const token = req.headers.authorization;   
    console.log('Token kontrol ediliyor... Auth Middleware calisti.');

    //token yoksa 401 don
    if (!token) {
        return res.status(401).json({ message: 'Token bulunamadi', error:'Unauthorized' });
    }

    //token dogru mu kontrol et (basit)
    if (token !== 'mysecrettoken') {
        return res.status(403).json({ message: 'Token gecersiz', error:'Forbidden' });
    }
    //token dogruysa bir sonraki middleware'e gec
    console.log('Token dogru. Istek yetkilendirildi.');
    next();
    
}