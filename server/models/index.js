'use strict'

const path = require('path'); 
const Sequelize = require('sequelize');
/*여기서 path 모듈을 사용할 때 여러개의 인자값이 들어갔는데
  두번째의 '..' 는 경로의 이동값인데, 현 디렉토리의 밖에 있다는 의미
  세번째의 'config' 는 현재 디렉토리 안에 있는 'config'라는 디렉토리로 들어간다는 의미
  마지막의 'db.json' 는 'config' 디렉토리 안에 있는 'db.json' 파일을 가져오겠다는 의미*/
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
  
    db.sequelize = sequelize; //seqeulize설정
    db.Sequelize = Sequelize; //seqeulize설정

    db.sequelize
    .authenticate()
    .then(() => { //db연동 성공시
        console.log('DATABASE CONNECTION SUCCESS!!!!!');
    })
    .catch(err => { //db연동 실패시
        console.log('UNABLE TO CONNECT DB!! -> ', err);
    });
    ///사용할 각 데이터베이스 테이블들 
    db.Timesettings = require('./TimeSettings')(sequelize,Sequelize);
    db.Homepageusers = require('./Homepageusers')(sequelize, Sequelize);
    db.Alltimelists = require('./Alltimelists')(sequelize, Sequelize);
    db.Boards = require('./Boards')(sequelize, Sequelize);
    db.Users = require('./Users')(sequelize, Sequelize);
    db.Hospitalboards = require('./Hospitalboards')(sequelize, Sequelize);
    db.MedicRecords = require('./MedicRecords')(sequelize, Sequelize);
    db.secret = '(9*)5$&dfds!3%^0%^@@2$1!#5@2sdf!4'; //hash값
module.exports = db;
