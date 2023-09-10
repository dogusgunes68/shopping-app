"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index")); // Express uygulamanızın yolu
describe('Product API', () => {
    it('should create a new product with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        // Doğrulama kurallarına uygun bir ürün verisi oluşturun
        const validProduct = {
            name: 'Product Name',
            description: 'Product Description',
            price: 19.99,
            // Diğer ürün özelliklerini ekleyin...
        };
        const response = yield (0, supertest_1.default)(index_1.default)
            .post('/api/products')
            .send(validProduct);
        // Olumlu bir yanıt almayı bekleyin
        expect(response.status).toBe(201);
        expect(response.body.success).toBe(true);
        expect(response.body.message).toBe('New product created');
        expect(response.body.data.productId).toBeDefined();
    }));
    it('should update an existing product with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        // Güncellenen ürünün kimliği
        const productId = 1; // Güncellenecek ürünün kimliğini kendi projenize uygun şekilde değiştirin
        // Güncellenecek veri
        const updatedProduct = {
            name: 'Updated Product Name',
            description: 'Updated Product Description',
            price: 29.99,
            // Diğer güncellenecek ürün özelliklerini ekleyin...
        };
        const response = yield (0, supertest_1.default)(index_1.default)
            .put(`/api/products/${productId}`)
            .send(updatedProduct);
        // Olumlu bir yanıt almayı bekleyin
        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.message).toBe('Product updated');
    }));
});
