// Finish the rest of this model
const sequelize = require("../config/config");
const { Model, DataTypes } = require("sequelize");

class Post extends Model {}
Post.init(
    {
        title: DataTypes.STRING,
        content: DataTypes.STRING,
    },
    {
     sequelize,
    
    }

)

module.exports = Post