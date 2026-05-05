const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Cyberify API</title>

  <style>
    body {
      margin: 0;
      font-family: 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .container {
      text-align: center;
      background: rgba(255,255,255,0.08);
      padding: 40px;
      border-radius: 20px;
      backdrop-filter: blur(12px);
      box-shadow: 0 10px 40px rgba(0,0,0,0.4);
      max-width: 500px;
      width: 90%;
    }

    h1 {
      font-size: 32px;
      margin-bottom: 10px;
    }

    p {
      opacity: 0.85;
      margin-bottom: 20px;
    }

    .badge {
      display: inline-block;
      padding: 8px 15px;
      border-radius: 20px;
      background: #00c853;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .links {
      margin-top: 20px;
    }

    .links a {
      display: block;
      margin: 10px 0;
      padding: 10px;
      border-radius: 10px;
      text-decoration: none;
      color: white;
      background: rgba(255,255,255,0.1);
      transition: 0.3s;
    }

    .links a:hover {
      background: rgba(255,255,255,0.2);
      transform: scale(1.05);
    }

    .footer {
      margin-top: 20px;
      font-size: 12px;
      opacity: 0.7;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🚀 Cyberify API</h1>
    <p>Your Express server is running successfully on AWS EC2</p>

    <div class="badge">✔ Server Status: ONLINE</div>

    <div class="links">
      <a href="/api/test">🔗 Test API</a>
      <a href="/api/health">💚 Health Check</a>
      <a href="/api/cicd-test">⚙️ CI/CD Status</a>
    </div>

    <div class="footer">
      Developer: Shoaib • MERN Stack • AWS
    </div>
  </div>
</body>
</html>
`);
//   res.json({
//     success: true,
//     message: 'My Express API is running on AWS! 🚀',
//     developer: 'Cyberify'
//   });
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