const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
  name: String,
  position: String,
  department: String
});

module.exports = (conn) => conn.model('Employee', employeeSchema);
