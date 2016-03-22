//"use strict";
var express = require("express");
var app = express();

var bodyparser = require("body-parser");
app.use(bodyparser.json());

var win = 0;
var loose = 0;
app.get("/", function(request, response) {
    response.send("PIYUSHA");
});


app.post("/flip", function(request, response) {
    var choice = request.body.call;
    //response.send(choice);
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
        win++;
    }
    else {
        response.send({"Result" : "LOOSE"});
        loose++;
    }

});
app.get("/stats", function(request, response) {
    response.send({ "wins" : win , "losses" : loose});
});

app.listen(3000, function() {
    console.log("Example app listening on port 3000");
});

/*
 
 */