const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

(async () => {
  const empConn = await mongoose.createConnection('mongodb+srv://supriyonag552:z4ZqfvOc3OL01RnO@cluster0.nqqno4g.mongodb.net/employees_db?retryWrites=true&w=majority&appName=Cluster0/employees_db');
  const prodConn = await mongoose.createConnection('mongodb+srv://supriyonag552:z4ZqfvOc3OL01RnO@cluster0.nqqno4g.mongodb.net/products_db?retryWrites=true&w=majority&appName=Cluster0/products_db');

  const combinedRoute = require('./routes/combined')(empConn, prodConn);
  app.use('/api', combinedRoute);

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
})();
