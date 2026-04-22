import express from 'express';
import router from './Routes.js';

const app = express();

app.use(express.json());
app.use('/api', router);
//test route
app.get('/', (req, res) => {
  res.status(200).json({ msg: "Test route" })
})

export default app;
