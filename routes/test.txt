const express = require('express');
const multer = require('multer');
const { Worker } = require('worker_threads');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
  const filePath = req.file.path;

  const worker = new Worker(path.resolve(__dirname, 'fileProcessor.js'), {
    workerData: { filePath }
  });

  worker.on('message', (result) => {
    res.send({ message: 'Processed successfully', result });
  });

  worker.on('error', (err) => {
    console.error(err);
    res.status(500).send('Worker error');
  });

  worker.on('exit', (code) => {
    if (code !== 0) console.error(`Worker stopped with exit code ${code}`);
  });
});

app.listen(3000, () => {
  console.log(`Server running on PID ${process.pid}`);
});
