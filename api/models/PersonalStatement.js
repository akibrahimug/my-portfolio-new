const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class PersonalStatement extends Model {}
  PersonalStatement.init(
    {
      personalStatmentID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      statement: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Personal statement is required",
          },
          notEmpty: {
            msg: 'Please provide a value for "statement"',
          },
        },
      },
      from: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          notNull: {
            msg: "From date is required (A date when you made the statement)",
          },
          notEmpty: {
            msg: 'Please provide a value for "from date"',
          },
        },
      },
      to: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          notNull: {
            msg: "End date is required (A date when you may want to update your personal statement)",
          },
          notEmpty: {
            msg: 'Please provide a value for "to date"',
          },
        },
      },
    },
    {
      sequelize,
    }
  );
  PersonalStatement.associate = (models) => {
    PersonalStatement.belongsTo(models.User, {
      foreignKey: {
        fieldName: "userID",
        allowNull: false,
      },
    });
  };
  return PersonalStatement;
};
