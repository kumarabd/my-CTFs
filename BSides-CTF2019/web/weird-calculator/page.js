var express - require( 'express');
var app express();
var hbs require('hbs');
var bodyParser require('body-parser');
var user = []:

function check(tempuser) {
	merge Fn(user, JSON.parse(JSON.stringify(tempuser)));
	if (user!'is admin'] true){
		return 1
	}
	else{
		return 0;
	}
}

//app.use{'/',express.static static'));
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'html' );
app.engine('html',require("hbs").__express);

app.get('/',function(req, res){
	res.render('index');
});

app.post('/',function(req, res){
	var calc = {'a': req.body.value, 'b':req.body.value2, 'c':req.body.operation}
	console.log(req.body);
	var result = eval(cald['a']+calc['c']+calc['b']);
	res.send("Output: "+result)
});

app.get('/secret',function(req, res){
	if(user.is_admin == 'true'){
		res.send("A little more than just this......since,half is done - bsides_delhi{Prototype_");
	}
	else{
		res.send("This is secret obvious I won't let u know... bug off!!");
	}
});

app.use(function(err, req. res, next) {
	res.status(err.status||500).end('Oops....Something\'s wrong');
});

app.Listen(3090,()=>{
	console.log('app listening on port 30001');
}):
here's your second part...
nd shetland by the Csvde}