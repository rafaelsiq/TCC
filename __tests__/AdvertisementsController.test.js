const request = require('supertest');
const server = require('../backend/database/app.js');

beforeAll(async () => {
   console.log('Iniciando TDD com jest!');
});

afterAll(() => {
server.close();
console.log('servidor fechado');
});


describe('inicio dos testes', () => {
   test('acessa a rota da home e verifica o conteúdo que é exibido ', async () => {
      const response = await request(server).get('/');
      expect(response.status).toEqual(200);
   });
});