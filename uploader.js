// uploader.js

const express = require('express');
const multer = require('multer');
const expressWs = require('express-ws');

const app = express();
expressWs(app);

const storage = multer.memoryStorage(); // Use memory storage for simplicity
const upload = multer({ storage: storage });

app.ws('/ws', (ws, req) => {
  // WebSocket connection for progress updates
  ws.on('message', (msg) => {
    console.log('Received:', msg);
  });
});

app.post('/upload', upload.single('file'), (req, res) => {
  // Handle file upload
  const file = req.file;
  console.log('File received:', file);

  // Emulate a delay for demonstration purposes
  setTimeout(() => {
    app.getWss().clients.forEach((client) => {
      // Broadcast progress to all connected clients
      client.send(JSON.stringify({ progress: 100 }));
    });
  }, 1000);

  res.json({
    originalname: file.originalname,
    size: file.size,
    url: 'http://localhost:4000/uploads/' + file.originalname,
  });
});

app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});
