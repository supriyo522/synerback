const mongoose = require('mongoose');

const connectEmployeeDB = async () => {
  await mongoose.createConnection('mongodb+srv://supriyonag552:z4ZqfvOc3OL01RnO@cluster0.nqqno4g.mongodb.net/employees_db?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};

module.exports = connectEmployeeDB;
