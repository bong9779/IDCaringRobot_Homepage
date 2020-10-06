const path = require('path');
const Sequelize = require('sequelize');
const model = require('./model');
const hashing = require(path.join(__dirname, 'config', 'hashing.js'));
const salt  = require(path.join(__dirname, 'config', 'db.json'))
 .salt
 const moment = require('moment');
 require('moment-timezone');
 moment.tz.setDefault("Asia/Seoul");
 
 const now_date = moment().format('YYYY-MM-DD HH:mm:ss');
module.exports = {
    needs: () => upload,
    api : {
      //로그인 (아이디비밀번호 맞는지 확인) model에 요청
        sendPw : (req, res) => {
            const body = req.body;
            const hash = hashing.enc(body.id, body.password, salt)
            model.api.searchInfo(body, hash, result =>{
                var obj = {};
                if(result[0]) {//반환값 있으면 로그인 성공
                    obj['suc'] = true;
                    obj['msg'] = '로그인 성공';
     
                  } else { //반환값 없으면 로그인 실패
                    obj['suc'] = false;
                    obj['msg'] = '로그인 실패';
                  }
                  
                  res.send(obj);
            })
            console.log('1. salt 값 : ' , salt);
            console.log('2. hash 결과 : ', hash);
          },
    },
    get : { 
      hospitalboard_data : (req, res) => {
        const body = req.body;

        model.get.hospitalboard_data(body, data => {
          const result = { data : data }
          res.send(result)
        })
      },
      //사용자 튜플 수 count model에 요청
      users_cnt : (req, res) => {
        const body = req.body;
        model.get.users_cnt(body, cnt => {
          const result = { cnt : cnt }
          res.send(result)
        })
      },
      
      hospitalboard_cnt : (req, res) => {
        const body = req.body;
        model.get.hospitalboard_cnt(body, cnt => {
          const result = { cnt : cnt }
          res.send(result)
        })
      },     
       //게시판 튜플 수 count model에 요청
      board_cnt : (req, res) => {
        const body = req.body;
        model.get.board_cnt(body, cnt => {
          const result = { cnt : cnt }
          res.send(result)
        })
      },
        //환자 약 복용 데이터 튜플 수 count model에 요청
      medicrecords_cnt : (req, res) => {
        const body = req.body;
        model.get.medicrecords_cnt(body, cnt => {
          const result = { cnt : cnt }
          res.send(result)
        })
      }, 
      //사용자 데이터 가져오기 model에 요청
      users : (req, res) => {
        const body = req.body;
        model.get.users(body, result => {
          if(result) {
            res.send(result);
          }
        })
      },
      //약 복용 데이터 가져오기 model에 요청
      medicrecords : (req, res) => {
        const body = req.body;
        model.get.medicrecords(body, result => {
          if(result) {
            res.send(result);
          }
        })
      },
      //게시판 가져오기 model에 요청
      board : (req, res) => {
        const body = req.body;
        model.get.board(body, result => {
          if(result) {
            res.send(result);
          }
        })
      },
      hospitalboard : (req, res) => {
        const body = req.body;
        model.get.hospitalboard(body, result => {
          if(result) {
            res.send(result);
          }
        })
      }

    },

    add : {

      //게시판 입력 값 추가 model에 요청
      hospitalboard : (req, res) =>{
        const body = req.body;
        model.add.hospitalboard(body, result =>{
          if(result){
            res.send(true);
          }
        })
      },
      //게시판 입력 값 추가 model에 요청
      board : (req, res) =>{
        const body = req.body;
        model.add.board(body, result =>{
          if(result){
            res.send(true);
          }
        })
      },
      //회원가입 입력값 추가 model에 요청
      homepageusers : (req, res) => {
        const body = req.body;
        const hash_pw = hashing.enc(body.id, body.password, salt);
        model.add.homepageusers(body, hash_pw, now_date, result =>{
          res.send(result);
        })
      },
      //약 복용 데이터 추가 model에 요청
      timesetting : (req, res) => {
        const body = req.body;
        model.api.searchOverlap(body, result =>{
          if(result[0]){
            model.delete.delOverlap(body, result=>{
              model.add.timesetting(body, result => {
                if(result) {
                  res.send(true);
                }
            })
            })
          }
          else{
          model.add.timesetting(body, result => {
              if(result) {
                res.send(true);
              }
          })

        }

        })

        
      },
    },

}

