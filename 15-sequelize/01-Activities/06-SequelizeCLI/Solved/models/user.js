module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });
  return User;
};


// Notice that user.js is exporting a function that takes in 2 parameters: sequelize and Datatypes