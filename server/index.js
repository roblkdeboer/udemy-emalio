import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

// Check which port to use
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('App listening on Port 5000');
});
