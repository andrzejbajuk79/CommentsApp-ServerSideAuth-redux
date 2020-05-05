const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../config');

function tokenForUser(user) {
 const timestamp = new Date().getTime();
 return jwt.encode({sub: user.id, iat: timestamp}, config.secret);
}

exports.signin = function (req, res, next) {
 //usert has email and password, we hahave to give a token
 console.log('test');

 res.send({token: tokenForUser(req.user), test: 'abc'});
};
exports.signup = function (req, res, next) {
 const email = req.body.email;
 const password = req.body.password;
 //see if email exist

 if (!email || !password) {
  res.status(422).send('bark adresu email albo hasla');
 }
 User.findOne({email: email}, function (err, existingUser) {
  if (err) {
   return next(err);
  }

  //if exist error
  if (existingUser) {
   return res.status(422).send('Email is in use');
  }
  // if not exit - register
  const user = new User({email, password});
  user.save(function (err) {
   if (err) {
    return next(err);
   }

   //user created
   res.json({token: tokenForUser(user)});
  });
  // if exist
 });
};
