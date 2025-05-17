const express = require("express");
const router = express.Router();

router.get('/events', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let eventId = 0;

    const sendEvent = () => {
        eventId++;
        const data = JSON.stringify({ message: `Real-time update ${eventId}`, timestamp: Date.now() });
        res.write(`id: ${eventId}\n`);
        res.write(`data: ${data}\n\n`);
    };

    // Send an event every 2 seconds
    const intervalId = setInterval(sendEvent, 1000);

    // Handle client disconnection
    req.on('close', () => {
        clearInterval(intervalId);
        console.log('Client disconnected');
    });
});

module.exports = router;
