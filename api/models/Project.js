const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Project extends Model {}
  Project.init(
    {
      projectID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      projectTitle: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Project title is required",
          },
          notEmpty: {
            msg: 'Please provide a value for "projectTitle"',
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
      projectDescription: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Project description is required",
          },
          notEmpty: {
            msg: 'Please provide a value for "projectDescription"',
          },
        },
      },
      liveSiteUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Live site URL is required",
          },
          notEmpty: {
            msg: 'Please provide a value for "liveSiteUrl"',
          },
        },
      },
      githubUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Github URL is required",
          },
          notEmpty: {
            msg: 'Please provide a value for "githubUrl"',
          },
        },
      },
    },
    { sequelize }
  );

  return Project;
};
