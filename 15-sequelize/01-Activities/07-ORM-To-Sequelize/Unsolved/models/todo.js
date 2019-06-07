module.exports = function(sequelize, DataTypes) {
    var Todo = sequelize.define("Todo", {
      text: DataTypes.STRING,
      complete: DataTypes.BOOLEAN
    });
    return Todo;
  };
  
  
  // Notice that user.js is exporting a function that takes in 2 parameters: sequelize and Datatypes