//twitter API consumer_key and consumer_secret
var TWITTER_CONSUMER_KEY = process.env.cliKrmBEFIpFnCt5WOoCml9vo;
var TWITTER_CONSUMER_SECRET = process.env.oGARrl1jNsDzu4ckikAwu5Gfuzwxq0m1T9frqclFOdEob85hIB;

const express = require('express') //express module
const routes = require('./routes') //routes folder 명시
const http = require('http') //http module 사용
const path = require('path') //path module 사용
const mongoose = require('mongoose') //mongoose 패키지사용
const models = require('./models') //models 관련 folder 사용 명시
const dbUrl = process.env.MONGOHQ_URL || 'mongodb://@localhost:27017/blog' //dbUrl MongoDB URL 가져옴

// 몽구스 모듈 커넥트
const db = mongoose.connect(dbUrl, {safe: true})

// everyoath 묘듈(인증 모듈)
const everyauth = require('everyauth')

// Express.js 미들웨어 정리
const cookieParser = require('cookie-parser')
const session = require('express-session')
const logger = require('morgan')
const errorHandler = require('errorhandler')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const app = express();
app.locals.appTitle = '자취 남녀'

// everyoauth using
everyauth.debug = true;
everyauth.twitter
  .consumerKey(TWITTER_CONSUMER_KEY)
  .consumerSecret(TWITTER_CONSUMER_SECRET)
  .findOrCreateUser(function(
    session,
    accessToken,
    accessTokenSecret,
    twitterUserMetadata) {
      var promise = this.Promise();
      process.nexTick(function(){
        if(twitterUserMetadata.screen_name === 'joonyoung') {
          session.user = twitterUserMetadata;
          session.admin = true;
        }
        promise.fulfill(twitterUserMetadata);
      })
      return promise;
  }
)
.redirectPath('/admin');

//everyauth에 대한 callback
everyauth.everymodule.handleLogout(routes.user.logout);
everyauth.everymodule.findUserById(function (user, callback){
  callback(user);
})




// Expose collections to request handlers
app.use((req, res, next) => {
  if (!models.Article || !models.User)
    return next(new Error('No models!!'));
  req.models = models;
  return next()
});

// Express.js 설정
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Express.js 미들웨어 설정
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//cookieParser and session 
// proxy: true와 resave: true , saveUninitialized: true를 안하면 오류 발생
app.use(cookieParser('3CCC4ACD-6ED1-4844-9217-82131BDCB239'));
app.use(session({
  secret: '2C44774A-D649-4D44-9535-46E296EF984F',
  name: 'cookei_name',
  proxy: true,
  resave: true,
  saveUninitialized: true
}));
app.use(methodOverride());
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

//인증 미들웨어
app.use (function(req, res, next) {
  if (req.session && req.session.admin)
    res.locals.admin = true;
  next();
});

// 권한 부여 미들웨어
var authorize = function(req, res, next) {
  if (req.session && req.session.admin)
    return next();
  else
    return res.send(401);
};

if (app.get('env') === 'development') {
  app.use(errorHandler());
}

// Pages and routes
app.get('/', routes.index)
app.get('/login', routes.user.login)
app.post('/login', routes.user.authenticate)
app.get('/logout', routes.user.logout)
app.get('/admin', authorize, routes.article.admin)
app.get('/post', authorize, routes.article.post)
app.post('/post', authorize, routes.article.postArticle)
app.get('/articles/:slug', routes.article.show)

// REST API routes
app.all('/api', authorize);
app.get('/api/articles', routes.article.list)
app.post('/api/articles', routes.article.add)
app.put('/api/articles/:id', routes.article.edit)
app.delete('/api/articles/:id', routes.article.del)
app.all('*', (req, res) => {
  res.status(404).send()
})

// http.createServer(app).listen(app.get('port'), function(){
//  console.log('listening on port ' + app.get('port'));
// });

//http server 실행
const server = http.createServer(app)
const boot = function () {
  server.listen(app.get('port'), function () {
    console.info(`Start joonyoung server port : ${app.get('port')}`)
  })
}

//server shutdown
const shutdown = function () {
  server.close(process.exit)
}
if (require.main === module) {
  boot()
}
else {
  console.info('Running app as a module')
  exports.boot = boot
  exports.shutdown = shutdown
  exports.port = app.get('port')
}
