var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

// * In character.js, model out the character table, as detailed in the schema.sql file located in the root of this project directory.

var Character = sequelize.define("allcharacters", {
   
    routeName: { 
        type: Sequelize.STRING, 
        allowNull: false,
    },
    name: { 
        type: Sequelize.STRING, 
        allowNull: false,
    },
    role: { 
        type: Sequelize.STRING, 
        allowNull: false,
    },
    age: { 
        type: Sequelize.INTEGER, 
        allowNull: false,
    },
    forcePoints: { 
        type: Sequelize.INTEGER, 
        allowNull: false,
    }
})

console.log(Character);

Character.sync();
