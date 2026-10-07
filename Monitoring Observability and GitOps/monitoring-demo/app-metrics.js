const express = require('express');
const client = require('prom-client');
const app = express();

const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ timeout: 5000 });

const httpRequestCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'status']
});

app.get('/', (req, res) => {
  httpRequestCounter.inc({ method: 'GET', status: '200' });
  res.send('Observability & Metrics Service Active - Amishi Patidar (24BCS10184)');
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

app.listen(3000, () => console.log('App with Prometheus metrics running on port 3000'));
