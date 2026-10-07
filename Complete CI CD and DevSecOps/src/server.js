const express = require('express');
const helmet = require('helmet');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(helmet());

app.get('/api/v1/health', (req, res) => {
  res.status(200).json({
    status: 'HEALTHY',
    service: 'DevSecOps Secured API Service',
    author: 'Amishi Patidar',
    rollNo: '24BCS10184',
    securityGate: 'PASSED'
  });
});

if (require.main === module) {
  app.listen(PORT, () => console.log(`Secured server running on port ${PORT}`));
}

module.exports = app;
