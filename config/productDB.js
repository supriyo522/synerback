const mongoose = require('mongoose');

const connectProductDB = async () => {
  await mongoose.createConnection('mongodb+srv://supriyonag552:z4ZqfvOc3OL01RnO@cluster0.nqqno4g.mongodb.net/products_db?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};

module.exports = connectProductDB;
