import express from 'express';

const app = express();

// Use the CODESPACE_NAME environment variable to construct the URL
const codespaceName = process.env.CODESPACE_NAME || 'localhost';
const port = 8000;

// Construct the full URL for Codespace
const url = `https://${codespaceName}-8000.app.github.dev`;

// Example route
app.get('/', (req, res) => {
  res.json({ message: 'Server running', url });
});

app.listen(port, () => {
  console.log(`Server is running at ${url}`);
});

export default app;
