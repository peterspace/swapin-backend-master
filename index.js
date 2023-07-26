const dotenv = require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');

/* ROUTES */

const swapRoutes = require('./routes/swapRoutes');

//=====================================================
const app = express();
app.use(express.json()); // to parse in json data
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: [
      'http://127.0.0.1:5173',
      'http://localhost:5173',
      'http://localhost:3000',
      'http://127.0.0.1:3000',
      'http://localhost:5000',
      'http://127.0.0.1:5000',
      'https://swapnowv2.onrender.com',
      'http://swap.govercity.com',
      'https://swap.govercity.com',
      'https://govercity.com',
      'http://govercity.com',
      process.env.FRONTEND_URL,
    ],
  })
);
//=================={Swap Routes}===============================================
app.use('/swap', swapRoutes);

// app.use((req, res) => {
//   res.send('Hello World!');
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
