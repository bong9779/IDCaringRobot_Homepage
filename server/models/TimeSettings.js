module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      'TimeSettings',
      {
        id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull : false,
       },

    
       patientname : {
        type: DataTypes.STRING(20),
        allowNull : false
       },

       patient_id : {
        type: DataTypes.INTEGER,
        allowNull : false
       },

       medName : {
        type: DataTypes.STRING(20),
        allowNull : false
       }, 

       medTime : {
        type: DataTypes.INTEGER,
        allowNull : false
       },

       date: {
        type: DataTypes.DATE,
        allowNull : false
       },
      },
      {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: false,
      }
  )};