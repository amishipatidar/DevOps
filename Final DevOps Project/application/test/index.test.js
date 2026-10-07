const request = require('supertest');
const app = require('../src/index');

describe('Capstone API Endpoint Verification', () => {
  it('should return 200 OK and student metadata', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body.author).toEqual('Amishi Patidar');
    expect(res.body.status).toEqual('OPERATIONAL');
  });
});
