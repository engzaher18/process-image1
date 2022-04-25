import express from 'express';
import rout from './router/rout';
const app = express();
const port = 3000;
app.use('/api', rout);
app.listen(port, () => {
  console.log(`server hosting from localhost:${port}`);
});

export default app;
