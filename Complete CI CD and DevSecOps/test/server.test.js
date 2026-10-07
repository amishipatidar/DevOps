const request = require('supertest');
const app = require('../src/server');

describe('GET /api/v1/health', () => {
  it('should return security gate passed state', async () => {
    const res = await request(app).get('/api/v1/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body.securityGate).toEqual('PASSED');
  });
});
