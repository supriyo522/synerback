const mongoose = require('mongoose');

const connectEmployeeDB = async () => {
  await mongoose.createConnection('mongodb://localhost:27017/employees_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};

module.exports = connectEmployeeDB;
