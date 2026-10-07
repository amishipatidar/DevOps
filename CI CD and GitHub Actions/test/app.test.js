const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
  it('should return 200 OK and valid JSON response', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'success');
    expect(res.body).toHaveProperty('author', 'Amishi Patidar');
  });
});

describe('GET /health', () => {
  it('should return 200 OK health check', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('OK');
  });
});
