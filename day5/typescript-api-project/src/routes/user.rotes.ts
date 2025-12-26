import { Router, type Request, type Response  } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router: Router = Router();
// Korunmasi gereken bir route ornegi
router.get('/profile', authMiddleware, (req: Request, res: Response) => {
    res.json({ message: 'Kullanici profili bilgileri', user: { id: 1, name: 'John Doe', email: 'john.doe@example.com' } });
});

// Acik route ornegi
router.get('/public-info', (req: Request, res: Response) => {
    res.json({ message: 'Herkese acik bilgi', info: 'Bu bilgi tum kullanicilar tarafindan gorulebilir.' });
}); 

//user detayı Id ile
router.get('/:id', authMiddleware, (req: Request, res: Response) => {
    const userId = req.params.id;
    res.json({ message: `Kullanici detayi`, user: { id: userId, name: 'John Doe', email: 'john.doe@example.com' } });   
});

export default router;