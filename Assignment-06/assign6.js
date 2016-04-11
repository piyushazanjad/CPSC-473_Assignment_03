 "use strict";
var express = require("express");
var app = express();
var redis = require("redis");
var client = redis.createClient(); 
var bodyparser = require("body-parser");
app.use(bodyparser.json());



client.on("connect", function() {
    console.log("connected");
});

app.get("/", function(request, response) {
    response.send("Hello World!");
});

app.post("/flip", function(request, response) {  
    
    var choice = request.body.call;
    var random_value;
    var coin = Math.random();

    if (coin > 0.5) {
        random_value = "heads";
    }

    else if (coin <= 0.5) {
        random_value = "tails";
    }

    if (choice === random_value) {
        response.send({"Result": "WIN "});
       
        client.incr("win");
        
    }
    else {
        response.send({"Result" : "LOSE"});
       
         client.incr("lose");
    }    
});

app.get("/stats", function(request, response) {
    
    client.mget("win","lose",function(err,result){
    var x=result.toString().split(",");
    response.send({ "win" : x[0] , "lose" : x[1]});
    });    
});

app.delete("/stats",function(request, response) {
    client.set("win","0");
    client.set("lose","0");
    response.send("Values set to 0");
   
});


app.listen(3000, function() {
    console.log("Example app listening on port 3000");
});


