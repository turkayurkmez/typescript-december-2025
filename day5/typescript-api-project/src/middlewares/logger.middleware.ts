
import type { Request, Response, NextFunction } from 'express'
/*
  Burada istekleri loglamak icin bir middleware olusturuyoruz.
  Her istek geldiginde method, URL, IP adresi, durum kodu ve islem suresi loglanacak. 

 */

export const loggerMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction) =>{

        // istegin basladigi zamani kaydet
        const startTime = Date.now();

        console.log(`[${new Date().toISOString()}]`);
        console.log(`** Method: ${req.method}`)
        console.log(`** URL: ${req.originalUrl}`);
        //ip address
        console.log(`** IP: ${req.ip}`);


// response tamamlandiginda durum kodu ve islem suresi loglanacak
        res.on('finish', () => {
            const duration = Date.now() - startTime;
            console.log(`** Status: ${res.statusCode}`);
            console.log(`** Duration: ${duration}ms`);
            console.log('---------------------------');
        });

        next();// bir sonraki middleware'e geç.
        
    }

