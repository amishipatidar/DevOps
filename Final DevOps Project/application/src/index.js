const express = require('express');
const client = require('prom-client');
const app = express();
const PORT = process.env.PORT || 8080;

client.collectDefaultMetrics();

app.get('/', (req, res) => {
  res.status(200).json({
    project: 'Final End-to-End DevOps Capstone',
    author: 'Amishi Patidar',
    rollNo: '24BCS10184',
    status: 'OPERATIONAL',
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

if (require.main === module) {
  app.listen(PORT, () => console.log(`Capstone Server running on port ${PORT}`));
}

module.exports = app;
