module.exports = (sequelize, Sequelize) => {
  
  const Task = sequelize.define('task', {
    
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    picture: {
      type: Sequelize.STRING,
      allowNull: false
    }

  });  
  
  return Task;
};
