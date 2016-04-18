"use strict";

var express = require("express");
var app = express();

var bodyparser = require("body-parser");
app.use(bodyparser.json());

var MongoClient = require("mongodb").MongoClient;
var URL = "mongodb://localhost:27017/mydb";


app.get("/links", function(request, response) {

    MongoClient.connect(URL, function(err, db) {
        var collection = db.collection("links");
        collection.find().toArray(function(err, docs) {
            console.log(docs);
            response.send(docs);
            db.close();
        });
    });
});

app.post("/links", function(request, response) {
    var choice1 = request.body.title;
    var choice2 = request.body.link;
    MongoClient.connect(URL, function(err, db) {
        if (err) {return;}
        var collection = db.collection("links");
        collection.insert({ "title": choice1 ,
             "link": choice2 ,
            "clicks" : 0 }, function() {

  });
                collection.find().toArray(function(err, docs) {
                    console.log(docs);
                    response.send(docs);
                    db.close();
                });          
        });

});


app.get("/click/:title", function(request, response) {
    var choice1 = request.params.title;
 
    MongoClient.connect(URL, function(err, db) {
        if (err) {return;}
        var collection = db.collection("links");
        collection.findAndModify( {"title": choice1} , [], {$inc : { "clicks": 1 }}, {  } , function(err, result) {
        response.redirect(result.value.link);
            });
        });
   });

app.listen(3000, function() {
    console.log("Example app listening on port 3000");
});
