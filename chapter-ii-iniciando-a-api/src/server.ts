import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('hello'))

app.listen(3333, () => {
  console.log('Server is up! :D')
})

