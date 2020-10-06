module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      'Boards',
      {
        board_id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull : false,
       },

       patient_id : {
        type: DataTypes.INTEGER,
        allowNull : false
       },

       patientname : {
        type: DataTypes.STRING(50),
        allowNull : false
       },

       contents: {
        type: DataTypes.TEXT,
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
