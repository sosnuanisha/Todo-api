var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000 ;

var todos = [{
	
	id : 1,
	description : " Meet mom for lunch",
	completed  : false
	
},{
	
	id : 2,
	description : "Go to market",
	completed : false
},{
	
	id :3,
	description : " Rock the world !!",
	completed : true
}];

//GET Todo/

app.get('/' ,function(req,res) {
	
	res.send('TODO API ROOT..');
	
});

app.get('/todos',function(req,res){
	
	res.json(todos);

});

app.get('/todos/:id',function(req,res){
	
	var todoId= parseInt(req.params.id,10);
	var matchtodo ;
	
	
	todos.forEach(function(num)
	{
		if( todoId === num.id )
				{
			matchtodo = num;
			console.log('Required Information..'+ num);
		}
	});
	
	if(matchtodo)
	{
		res.json(matchtodo);
	}
	else{
		res.status(404).send();
		
	}
	

});

app.listen(PORT, function(){
	
	console.log("Express Listening on PORT" + PORT);
});