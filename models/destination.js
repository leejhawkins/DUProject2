module.exports = function(sequelize, DataTypes) {
  var Destination = sequelize.define("Destination", {
    departureCity: {
      type: DataTypes.STRING,
      allowNull: false
    },
    arrivalCity: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tripDistance: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tripBlog: DataTypes.TEXT,
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  });
  Destination.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Destination.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    Destination.hasMany(models.Activity, {
      onDelete: "cascade"
    });
  };
  return Destination;
};
