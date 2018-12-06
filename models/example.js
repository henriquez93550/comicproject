module.exports = function(sequelize, DataTypes) {
  var submissions = sequelize.define("submissions", {
    w1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    w2: {
      type: DataTypes.STRING,
      allowNull: false
    },
    w3: {
      type: DataTypes.STRING,
      allowNull: false
    },
    w4: {
      type: DataTypes.STRING,
      allowNull: false
    },
    w5: {
      type: DataTypes.STRING,
      allowNull: false
    },
    w6: {
      type: DataTypes.STRING,
      allowNull: false
    },
    w7: {
      type: DataTypes.STRING,
      allowNull: false
    },
    w8: {
      type: DataTypes.STRING,
      allowNull: false
    },
    w9: {
      type: DataTypes.STRING,
      allowNull: false
    },
    w10: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return submissions;
};
