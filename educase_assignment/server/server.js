import express from 'express';
import router from './Routes.js';

const PORT = 5000
const app = express();

app.use(express.json());
app.use('/api', router);

app.get('/', (req, res) => {
  res.status(200).json({ msg: "Test route" })
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
