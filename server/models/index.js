'use strict'

const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'config', 'db.json'))[
    env
  ];
const db = {};
let sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
    {
      define: {
        charset: 'utf8',
        collate: 'utf8_general_ci'
      }
    }
  );
  
    db.sequelize = sequelize;
    db.Sequelize = Sequelize;

    db.sequelize
    .authenticate()
    .then(() => {
        console.log('DATABASE CONNECTION SUCCESS!!!!!');
    })
    .catch(err => {
        console.log('UNABLE TO CONNECT DB!! -> ', err);
    });
    db.Admin = require('./admin')(sequelize,Sequelize);
    db.Timesetting = require('./timesetting')(sequelize,Sequelize);
    db.Homepageusers = require('./homepageusers')(sequelize, Sequelize);
    db.Alltimelist = require('./alltimelist')(sequelize, Sequelize);
    db.Boards = require('./board')(sequelize, Sequelize);
    db.Users = require('./users')(sequelize, Sequelize);
    db.MedicRecords = require('./medicrecords')(sequelize, Sequelize);
    db.secret = '(9*)5$&dfds!3%^0%^@@2$1!#5@2sdf!4';
module.exports = db;
