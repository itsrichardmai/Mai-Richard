// Dependencies
// =============================================================

// Require the sequelize library
var Sequelize = require('sequelize');
// Require the connection to the database (connection.js)
var sequelize = require('../config/connection');
// Create a "Book" model with the following configuration
var Book = sequelize.define("allbooks", {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false
    },
    genre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pages: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})
// 1. A title property of type STRING
// 2. An author property of type STRING
// 3. A genre property of type STRING
// 4. A pages property of type INTEGER

Book.sync();
// Sync model with DB
module.exports = Book;
// Export the book model for other files to use
