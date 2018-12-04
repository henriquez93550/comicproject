module.exports = function(sequelize, DataTypes) {
  var submissions = sequelize.define("submissions", {
    text: DataTypes.STRING,
  });
  return submissions;
};
