var express = require('express');
var app = express();

const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});

app.set('view engine', 'ejs');

const ksiazka =[
]
var msg = "Backend Message!!!";



// app.delete('/',function(req,res)){

// }


app.post('pages/index',urlencodedParser , function(req, res){
	
	ksiazka.push({name:req.body.frontmessage,autor:req.body.autor})
   
	res.render('pages/index',{ksiazka:ksiazka, ksiazkaautor:ksiazka.autor,ksiazkaname:ksiazka.name});

});

app.get('/', function(req, res) {

	res.render('pages/index',{ksiazka:ksiazka, ksiazkaautor:ksiazka.autor,ksiazkaname:ksiazka.name});

  });

app.post('/msg',urlencodedParser , function(req, res){
	
	ksiazka.push({name:req.body.frontmessage,autor:req.body.autor})
   
	res.render('pages/index',{ksiazka:ksiazka, ksiazkaautor:ksiazka.autor,ksiazkaname:ksiazka.name});

});




app.listen(8080);
console.log('Server is listening on port 8080');
