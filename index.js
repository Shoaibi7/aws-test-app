const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'My Express API is running on AWS! 🚀',
    developer: 'Cyberify'
  });
});

app.get('/api/test', (req, res) => {
  res.json({
    success: true,
    message: 'Test route working!',
    data: {
      name: 'Shoaib',
      role: 'MERN Developer',
      server: 'AWS EC2'
    }
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    status: 'Server is healthy ✅',
    uptime: process.uptime(),
    timestamp: new Date()
  });
});
app.get('/api/cicd-test', (req, res) => {
  res.json({
    success: true,
    message: 'CI/CD is working! Auto deployed from GitHub 🚀',
    deployedAt: new Date(),
    version: '2.0'
  });
});
// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});