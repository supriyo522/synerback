const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

(async () => {
  const empConn = await mongoose.createConnection('mongodb://localhost:27017/employees_db');
  const prodConn = await mongoose.createConnection('mongodb://localhost:27017/products_db');

  const combinedRoute = require('./routes/combined')(empConn, prodConn);
  app.use('/api', combinedRoute);

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
})();
