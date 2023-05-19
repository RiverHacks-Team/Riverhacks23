module.exports = (sequelize, Sequelize) => {
  
  const UserAuth = sequelize.define('userAuth', {
    
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }

  });  
  
  return UserAuth;
};
