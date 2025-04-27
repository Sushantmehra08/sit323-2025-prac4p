const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Addition Endpoint
app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid input. Please provide two numbers.' });
    }
    const result = parseFloat(num1) + parseFloat(num2);
    res.json({ result });
});

// Subtraction Endpoint
app.get('/subtract', (req, res) => {
    const { num1, num2 } = req.query;
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid input. Please provide two numbers.' });
    }
    const result = parseFloat(num1) - parseFloat(num2);
    res.json({ result });
});

// Multiplication Endpoint
app.get('/multiply', (req, res) => {
    const { num1, num2 } = req.query;
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid input. Please provide two numbers.' });
    }
    const result = parseFloat(num1) * parseFloat(num2);
    res.json({ result });
});

// Division Endpoint
app.get('/divide', (req, res) => {
    const { num1, num2 } = req.query;
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid input. Please provide two numbers.' });
    }
    if (parseFloat(num2) === 0) {
        return res.status(400).json({ error: 'Cannot divide by zero.' });
    }
    const result = parseFloat(num1) / parseFloat(num2);
    res.json({ result });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Calculator microservice running at http://localhost:${PORT}`);
});
