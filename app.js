const express       = require('express'),
      path          = require('path'),
      favicon       = require('serve-favicon'),
      logger        = require('morgan'),
      cookieParser  = require('cookie-parser'),
      bodyParser    = require('body-parser'),
      hbs           = require('express-handlebars'),
      mongoose      = require('mongoose'),
      session       = require('express-session'),
      flash         = require('connect-flash'),
      passport      = require('passport'),
      bcrypt        = require('bcrypt');

const index = require('./routes/index');


const app = express();
mongoose.connect('mongodb://localhost:27017/mercury');
require('./config/passport');

// view engine setup
app.engine('.hbs', hbs({ defaultLayout: 'layout', extname: '.hbs' }));
app.set('view engine', '.hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({ secret: 'my super secret', resave: true, saveUninitialized: true }));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000, () => console.log('Shopping Cart server started'));

module.exports = app;
