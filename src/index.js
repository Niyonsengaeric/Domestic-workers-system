import express from 'express';
import { json, urlencoded } from 'body-parser';
import { config } from 'dotenv';
import masterRoute from './routes/masterRoutes';

config();
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(urlencoded({ extended: false }));
app.use(json());

const port = process.env.PORT || 4000;
masterRoute(app);
app.listen(port, () => {
  console.log(`App listening on port ${port}...`);
});

app.use((req, res) => res.status(404).send({
  status: 404,
  error: 'Not Found!',
}));
export default app;
