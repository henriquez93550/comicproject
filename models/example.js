module.exports = function(sequelize, DataTypes) {
  var submissions = sequelize.define("submissions", {
    word: DataTypes.STRING,
  });
  return submissions;
};
