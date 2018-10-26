var express = require('express');
var app = express();
var mongodb=require('mongodb');
var mongoclient=mongodb.MongoClient;
var url = "mongodb://127.0.0.1:27017/sampledb"


app.get("/New",function(req,res){
    mongoclient.connect(url,function(err,database){
        var db = database.db("sampledb");
        var collection = db.collection('Books');
        var BookData = {"BookID":34, "BookName":"First", "Author":"Kiran", "Price":34, "Publisher":"Penguin"}
        collection.insert(BookData,function(err,database){
            if(err){
                console.log("error");

            }
            else{
                console.log("New Book Added");
            }
        })
    })
})

app.listen(8000,function(req,res){

    console.log("Server has started..")
})