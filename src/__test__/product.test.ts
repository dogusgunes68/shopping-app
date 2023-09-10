import request from 'supertest';
import app from '../index'; // Express uygulamanızın yolu
import { productValidation } from '../validation/validate-product-body'; // Ürün doğrulama şemanızın yolu

describe('Product API', () => {
  it('should create a new product with valid data', async () => {
    // Doğrulama kurallarına uygun bir ürün verisi oluşturun
    const validProduct = {
      name: 'Product Name',
      description: 'Product Description',
      price: 19.99,
      // Diğer ürün özelliklerini ekleyin...
    };

    const response = await request(app)
      .post('/api/products')
      .send(validProduct);

    // Olumlu bir yanıt almayı bekleyin
    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe('New product created');
    expect(response.body.data.productId).toBeDefined();
  });

  it('should update an existing product with valid data', async () => {
    // Güncellenen ürünün kimliği
    const productId = 1; // Güncellenecek ürünün kimliğini kendi projenize uygun şekilde değiştirin

    // Güncellenecek veri
    const updatedProduct = {
      name: 'Updated Product Name',
      description: 'Updated Product Description',
      price: 29.99,
      // Diğer güncellenecek ürün özelliklerini ekleyin...
    };

    const response = await request(app)
      .put(`/api/products/${productId}`)
      .send(updatedProduct);

    // Olumlu bir yanıt almayı bekleyin
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe('Product updated');
  });

});






