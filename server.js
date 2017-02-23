const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const methodOverride = require('method-override');
const swig = require('swig');
swig.setDefaults( { cache: false })
const db = require('./db');

const app = express();

app.set('view engine', 'html');
app.engine('html', swig.renderFile)
app.set('views', __dirname);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded( { extended: false }))
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use('/vendors', express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/public'));

app.use((req,res,next)=>{
  res.locals.categories = db.getCategories();  
  next();
})

app.get('/', (req,res,next)=>{
  res.render('index', { 
    home: true, 
    //total: db.getCategories().length,
    //data: JSON.stringify(db.getCategories(), null, 2)
  })
})

app.use('/categories', require('./categories'));

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening on port ${port}`))