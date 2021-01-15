//REQUIRES
const express= require('express');
const app= express();
const morgan= require('morgan')
const path= require('path');


//SETTINGS
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(morgan('dev'));

//ROUTES
app.use(require('./routes/routes'));

//STATIC FILE
app.use(express.static(path.join(__dirname, 'public')));

//SERVIDOR
app.listen(app.get('port'),()=>{
    console.log('server on port ' , app.get('port'))
})