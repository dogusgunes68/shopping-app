import request from 'supertest';
import app from '../index'; // Express uygulamanızın yolu
import { orderValidation } from '../validation/validate-order-body'; // Doğrulama şemanızın yolu


describe('Order API', () => {
    it('should create a new order with valid data', async () => {
      // Doğrulama kurallarına uygun bir sipariş verisi oluşturun
      const validOrder = {
        count: 5,
        customer_id: 1, // Geçerli bir müşteri kimliği
        product_id: 2,  // Geçerli bir ürün kimliği
      };
  
      const response = await request(app)
        .post('/api/orders')
        .send(validOrder);
  
      // Olumlu bir yanıt almayı bekleyin
      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe('New order created');
      expect(response.body.data.orderId).toBeDefined();
    });
  
    it('should require customer authentication', async () => {
      // Geçersiz bir müşteri kimliği kullanarak sipariş oluşturmayı simüle edin
      const invalidOrder = {
        count: 5,
        customer_id: 999, // Geçersiz bir müşteri kimliği
        product_id: 2,
      };
  
      const response = await request(app)
        .post('/api/orders')
        .send(invalidOrder);
  
      // Müşteri kimlik doğrulaması gerektiren senaryoda beklenen durum kodu 401 (Unauthorized) olmalıdır
      expect(response.status).toBe(401);
    });
  
    it('should retrieve a list of orders', async () => {
        const response = await request(app).get('/api/orders');
    
        // Olumlu bir yanıt almayı bekleyin
        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.message).toBe('List of orders');
        expect(response.body.data).toBeInstanceOf(Array); // Yanıtın bir dizi olduğunu kontrol edin
      });

    it('should retrieve details of a specific order', async () => {
        // Test için bir sipariş kimliği seçin
        const orderId = 1; // Sipariş kimliğini kendi projenize uygun şekilde değiştirin
    
        const response = await request(app).get(`/api/orders/${orderId}`);
    
        // Olumlu bir yanıt almayı bekleyin
        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.message).toBe('Details of the order');
        expect(response.body.data).toBeDefined(); // Yanıtın veri içermesi gerektiğini kontrol edin
      });
    
  });