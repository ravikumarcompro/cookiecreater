var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/redirect', function(req, res, next) {  
  console.log("redirect call invoked.!!", req.url);
  res.redirect(req.url)
});1

/* GET home page. */
router.post('/set-cookie', function(req, res, next) {
  console.log("post call invoked.!!");
  let randomNumber=Math.random().toString();
  randomNumber=randomNumber.substring(2,randomNumber.length);
  res.cookie('mycokkieName',randomNumber, { maxAge: 900000, httpOnly: true })
  res.send('setting cookies.!!');
});

/* GET home page. */
router.get('/get-cookie', function(req, res, next) {
  console.log("get call invoked.!!");
  console.log(req.cookies['mycokkieName']);
  response = `Got the cookkie ${req.cookies['mycokkieName']}`;
  res.send(response);
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Client App' });
});


module.exports = router;
