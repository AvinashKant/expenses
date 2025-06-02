const { parentPort, workerData } = require('worker_threads');
const fs = require('fs');

// Simulate heavy processing
setTimeout(() => {
  // Read and return file size
  const stats = fs.statSync(workerData.filePath);
  parentPort.postMessage({ size: stats.size });
}, 2000);
