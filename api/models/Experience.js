const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  class Experience extends Model {}
  Experience.init(
    {
      experienceID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      company: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Company is required",
          },
          notEmpty: {
            msg: 'Please provide a value for "company"',
          },
        },
      },
      position: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Position is required",
          },
          notEmpty: {
            msg: 'Please provide a value for "position"',
          },
        },
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Start date is required",
          },
          notEmpty: {
            msg: 'Please provide a value for "startDate"',
          },
        },
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: {
            msg: "End date is required",
          },
          notEmpty: {
            msg: 'Please provide a value for "endDate"',
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Description is required",
          },
          notEmpty: {
            msg: 'Please provide a value for "description"',
          },
        },
      },
    },
    { sequelize }
  );
  Experience.associate = (models) => {
    Experience.hasMany(models.TechStack, {
      foreignKey: { fieldName: "experienceID", allowNull: false },
    });
    Experience.belongsTo(models.User, {
      foreignKey: { fieldName: "userID", allowNull: false },
    });
  };
  return Experience;
};
