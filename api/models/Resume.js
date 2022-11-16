const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  class Resume extends Model {}
  Resume.init(
    {
      resumeID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      resumeTitle: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Resume title is required",
          },
          notEmpty: {
            msg: 'Please provide a value for "resumeTitle"',
          },
        },
      },
      resumeUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Resume URL is required",
          },
          notEmpty: {
            msg: 'Please provide a value for "resumeUrl"',
          },
        },
      },

      date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Date is required",
          },
          notEmpty: {
            msg: 'Please provide a value for "date"',
          },
        },
      },
    },
    { sequelize }
  );
  return Resume;
};
