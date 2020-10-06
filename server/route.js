const express = require('express');
const router = express.Router();
const controller = require ('./controller');
//경로설정
router.post('/add/timesetting',controller.add.timesetting);
router.post('/send/pw',controller.api.sendPw);
router.post('/add/homepageusers',controller.add.homepageusers);
router.post('/add/board',controller.add.board);
router.post('/add/hospitalboard',controller.add.hospitalboard);
router.post('/get/board', controller.get.medicrecords);
router.post('/get/users', controller.get.users);
router.post('/get/medicrecords', controller.get.medicrecords);
router.post('/get/users_cnt',controller.get.users_cnt);
router.post('/get/board_cnt', controller.get.board_cnt);
router.post('/get/medicrecords_cnt', controller.get.medicrecords_cnt);
router.post('/get/hospitalboard_cnt', controller.get.hospitalboard_cnt);
router.post('/get/hospitalboard', controller.get.hospitalboard);
router.post('/get/hospitalboard_data', controller.get.hospitalboard_data);
module.exports = router;
