import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';
// user routes
import authRoute from './routes/user.route.js';
//reviewer routes
import reviewerRoute from './routes/reviewer.route.js';
//admin routes
import adminRoute from './routes/admin.route.js';
//import connecting files from
import connectToDb from './config/connectToDb.js';
// accessing .env data
dotenv.config();
//connecting to database
connectToDb();
//initializing app
const app = express();
//cors are used for cross-origin domain  requests
app.use(cors());
//using express.json middleware for parsing
app.use(express.json());
// here we declared port if there is no port in the .env file then default 8080 port is used
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hi I am on');
});
// user routes
app.use('/api/v1/user/', authRoute);
app.use('/api/v1/admin', adminRoute);
app.use('/api/v1/reviewer', reviewerRoute);
//listening port
app.listen(port, () => {
  console.log('listening on port'.bgBlue);
});
