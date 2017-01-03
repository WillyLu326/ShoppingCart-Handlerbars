/**
 * Created by zhenglu on 1/3/17.
 */
const passport      = require('passport'),
      User          = require('../models/user'),
      LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

passport.use('local.signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function(req, email, password, done) {
    User.findOne({ 'email': email }, function (err, user) {
        if (err) {
            return done(err);
        }
        if (user) {
            return done(null, false, { message: 'This email is in used' });
        }
        var user = new User();
        user.email = email;
        user.password = user.encryptPassword(password);

        user.save(function(err) {
            if (err) {
                done(err);
            }
            return done(null, user);
        });
    });
}));