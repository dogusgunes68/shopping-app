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
describe('Order API', () => {
    it('should create a new order with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        // Doğrulama kurallarına uygun bir sipariş verisi oluşturun
        const validOrder = {
            count: 5,
            customer_id: 1,
            product_id: 2, // Geçerli bir ürün kimliği
        };
        const response = yield (0, supertest_1.default)(index_1.default)
            .post('/api/orders')
            .send(validOrder);
        // Olumlu bir yanıt almayı bekleyin
        expect(response.status).toBe(201);
        expect(response.body.success).toBe(true);
        expect(response.body.message).toBe('New order created');
        expect(response.body.data.orderId).toBeDefined();
    }));
    it('should require customer authentication', () => __awaiter(void 0, void 0, void 0, function* () {
        // Geçersiz bir müşteri kimliği kullanarak sipariş oluşturmayı simüle edin
        const invalidOrder = {
            count: 5,
            customer_id: 999,
            product_id: 2,
        };
        const response = yield (0, supertest_1.default)(index_1.default)
            .post('/api/orders')
            .send(invalidOrder);
        // Müşteri kimlik doğrulaması gerektiren senaryoda beklenen durum kodu 401 (Unauthorized) olmalıdır
        expect(response.status).toBe(401);
    }));
    it('should retrieve a list of orders', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(index_1.default).get('/api/orders');
        // Olumlu bir yanıt almayı bekleyin
        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.message).toBe('List of orders');
        expect(response.body.data).toBeInstanceOf(Array); // Yanıtın bir dizi olduğunu kontrol edin
    }));
    it('should retrieve details of a specific order', () => __awaiter(void 0, void 0, void 0, function* () {
        // Test için bir sipariş kimliği seçin
        const orderId = 1; // Sipariş kimliğini kendi projenize uygun şekilde değiştirin
        const response = yield (0, supertest_1.default)(index_1.default).get(`/api/orders/${orderId}`);
        // Olumlu bir yanıt almayı bekleyin
        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.message).toBe('Details of the order');
        expect(response.body.data).toBeDefined(); // Yanıtın veri içermesi gerektiğini kontrol edin
    }));
});
