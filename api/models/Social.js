const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Social extends Model {}
  Social.init(
    {
      socialID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      socialTitle: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Social title is required",
          },
          notEmpty: {
            msg: 'Please provide a value for "socialTitle"',
          },
        },
      },
      pictureUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Picture URL is required",
          },
          notEmpty: {
            msg: 'Please provide a value for "pictureUrl"',
          },
        },
      },
      Link: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Link is required",
          },
          notEmpty: {
            msg: 'Please provide a value for "Link"',
          },
        },
      },
    },
    { sequelize }
  );
  Social.associate = (models) => {
    Social.belongsTo(models.User, {
      foreignKey: { fieldName: "userID", allowNull: false },
    });
  };
  return Social;
};
