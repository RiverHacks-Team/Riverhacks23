module.exports = (sequelize, Sequelize) => {
  
  const Task = sequelize.define('task', {
    
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    catagory: {
      type: Sequelize.STRING,
      allowNull: false
    },
    points: {
      type: Sequelize.INTEGER,
      allowNull: false
    }

  });  
  
  return Task;
};
