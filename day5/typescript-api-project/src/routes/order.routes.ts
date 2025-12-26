import { Router } from 'express';
import { OrderService } from '../services/orderService';

const router = Router();

// Sipariş oluştur
router.post('/create', (req, res) => {
  const { customerName, items, totalAmount } = req.body;
  
  const order = OrderService.createOrder(customerName, items, totalAmount);
  
  res.json({
    success: true,
    message: 'Sipariş oluşturuldu!',
    order
  });
});

// Ödeme işlemi simüle et
router.post('/:orderId/pay', (req, res) => {
  // Gerçek projede order'ı database'den çekeriz
  const mockOrder = {
    id: req.params.orderId,
    customerName: 'Türkay',
    items: ['Laptop', 'Mouse'],
    totalAmount: 15000,
    status: 'pending' as const
  };
  
  OrderService.processPayment(mockOrder);
  
  res.json({
    success: true,
    message: 'Ödeme işlendi!'
  });
});

export default router;