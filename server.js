		var express = require('express');
		var app = express();
		
		var bodyParser = require('body-parser');
		
		var PORT = process.env.PORT || 3000 ;
		
		var todos = [];
		var todoNextId =1;
		
		app.use(bodyParser.json());
		
		//GET Todo/
		
		app.get('/' ,function(req,res) {
		
		res.send('TODO API ROOT..');
		
		});
		
		app.get('/todos',function(req,res){
		
		res.json(todos);
		
		});
		
		//GET Todo ID
		
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
		
		//POST /todos
		app.post('/todos', function(req,res)
		{
			var body =req.body;
			body.id = todoNextId++;
			
			todos.push(body);
			
			//console.log('description..'+ body.description);
			res.json(body);
			console.log('and ID is..'+ todoNextId);
			
		});
		
		app.listen(PORT, function(){
		
		console.log("Express Listening on PORT" + PORT);
		});