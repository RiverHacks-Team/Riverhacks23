module.exports = (sequelize, Sequelize) => {
  
  const UserPub = sequelize.define('users', {
    
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    }

  });  
  
  return UserPub;
};
