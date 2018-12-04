module.exports = function(sequelize, DataTypes) {
  var submissions = sequelize.define("submissions", {
    w1: {
      type: DataTypes.STRING,
      required: true
    },
    w2: {
      type: DataTypes.STRING,
      required: true
    },
    w3: {
      type: DataTypes.STRING,
      required: true
    },
    w4: {
      type: DataTypes.STRING,
      required: true
    },
    w5: {
      type: DataTypes.STRING,
      required: true
    },
    w6: {
      type: DataTypes.STRING,
      required: true
    },
    w7: {
      type: DataTypes.STRING,
      required: true
    },
    w8: {
      type: DataTypes.STRING,
      required: true
    },
    w9: {
      type: DataTypes.STRING,
      required: true
    },
    w10: {
      type: DataTypes.STRING,
      required: true
    }
  });
  return submissions;
};
