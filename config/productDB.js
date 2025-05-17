const mongoose = require('mongoose');

const connectProductDB = async () => {
  await mongoose.createConnection('mongodb://localhost:27017/products_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};

module.exports = connectProductDB;
