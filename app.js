//declaration
const express 			= require('express');
const bodyParser 		= require('body-parser');
const exSession 		= require('express-session');
const cookieParser 		= require('cookie-parser');
const home				= require('./controllers/home');
const app				= express();
const port				= 3000;

//configuration
app.set('view engine', 'ejs');

//middleware
app.use('/assets', express.static('assets'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(exSession({secret: 'secret value', saveUninitialized: true, resave: false}));

app.use('/home', home);

//router
app.get('/', (req, res)=>{
	res.send('Welcome to online computer shop.');
});

//server startup
app.listen(port, (error)=>{
	console.log('Server Started at '+port);
});