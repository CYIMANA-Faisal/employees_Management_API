import db from './models';
import cors from 'cors';
import express from 'express';
import routes from './routes';

const app = express();

const port = process.env.PORT || 3000;
// routes
app.use('/api/v1/', routes);

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// db connection check
const { sequelize } = db;
sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch((err) => console.log(`Error: ${err}`));

app.listen(port, () => {
console.log(`App is listening at http://localhost:${port}`);
})