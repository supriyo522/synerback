const express = require('express');
const router = express.Router();

module.exports = (empConn, prodConn) => {
  const Employee = require('../models/Employee')(empConn);
  const Product = require('../models/Product')(prodConn);

  router.get('/combined-data', async (req, res) => {
    try {
      const employees = await Employee.find({});
      const products = await Product.find({});

      res.json({ employees, products });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  return router;
};
