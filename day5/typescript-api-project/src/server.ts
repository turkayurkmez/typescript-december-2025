import express from 'express';
import type { Request, Response } from 'express';
import { loggerMiddleware } from './middlewares/logger.middleware.js';
import { errorHandlerMiddleware } from './middlewares/errorHandler.middleware.js';
import userRoutes from './routes/user.rotes.js';
import { setupOrderEventListeners } from './services/setupEventListeners.js';
import orderRoutes from './routes/order.routes.js';



const app = express();
const PORT = process.env.PORT || 3000;

// Global middleware'leri kullan
app.use(express.json()); // JSON body parsing middleware
app.use(loggerMiddleware);
app.use(errorHandlerMiddleware);
app.use('/api/users', userRoutes);

setupOrderEventListeners();

app.use('/api/orders', orderRoutes);


app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello, TypeScript with Express!', timeStamp: new Date().toISOString(), 
    endpoints: {
     public: '/api/users/public-info',
     profile: '/api/users/profile (requires auth token)',
     userById: '/api/users/:id (requires auth token)'
    }  
   });
});

app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', uptime: process.uptime() });
});

//test için hata fırlatan endpoint
app.get('/error-test', (req: Request, res: Response) => {
  throw new Error('Bu bir test hatasidir!');
});

//404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: 'Kaynak bulunamadi', error: 'Not Found' });
});



app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  console.log(`Health check at http://localhost:${PORT}/health`);

});