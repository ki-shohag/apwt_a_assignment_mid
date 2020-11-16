//declaration
const express 			= require('express');
const bodyParser 		= require('body-parser');
const exSession 		= require('express-session');
const cookieParser 		= require('cookie-parser');
const home				= require('./controllers/home');
const signup			= require('./controllers/sign-up');
const login				= require('./controllers/login');
const component			= require('./controllers/components');
const laptops			= require('./controllers/laptops');
const accessories		= require('./controllers/accessories');
const monitors		= require('./controllers/monitors');
const products		= require('./controllers/products');
const signOut		= require('./controllers/sign-out');
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
app.use('/sign-up', signup);
app.use('/login', login);
app.use('/components', component);
app.use('/laptops', laptops);
app.use('/accessories', accessories);
app.use('/monitors', monitors);
app.use('/products', products);
app.use('/sign-out', signOut);

//router
app.get('/', (req, res)=>{
	res.send('Welcome to online computer shop.');
});

//server startup
app.listen(port, (error)=>{
	console.log('Server Started at '+port);
});