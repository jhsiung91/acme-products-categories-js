const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const path = require('path');
const db = require('./db');
const bodyParser = require('body-Parser');
const methodOverride = require('method-override');
const port = process.env.PORT || 3000;

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});

app.use('/vendor', express.static(path.join((__dirname, 'node_modules'))));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(methodOverride('_method'));

app.get('/',function(req,res){
	res.render('index',{categories:db.getCategoryNames()}); 
})

app.use('/categories', require('./routes/categories'));

app.use(function(err, req, res, next){
  res.render('error', { error: err });
});

app.listen(port, function(){
  console.log(`listening on port ${ port }`);
})