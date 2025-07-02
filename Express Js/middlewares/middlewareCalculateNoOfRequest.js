//Popular middleware-- how many req is comes to my page
const express = require("express");
const app=express();

let noOfRequest=0;
function calculateRequests(req,res,next){
    noOfRequest++;
    console.log(noOfRequest);
    next();
}
app.get("/health-checkup",calculateRequests,function(req,res){
   res.send("req coming");
})
app.listen(3005)