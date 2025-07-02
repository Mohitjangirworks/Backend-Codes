// app.use(middlewareName)
/*
?? req.body whenever we trying to print it it gives => undefined 

bcoz body alg alg formet me likhi ho skti hai to print
krna possible nhi hai esliye ham phle use parse krte hai then print
----How to Parse Mohit ---=> using app.use(express.json())
now i can easily print console.log(req.body);

*/ 
//Popular middleware-- how many req is comes to my page
const express = require("express");
const app=express();

let noOfRequest=0;
function calculateRequests(req,res,next){
    noOfRequest++;
    console.log(noOfRequest);
    next()
}

app.use(express.json())
app.use(calculateRequests)
app.post("/health-checkup", function(req,res){
    console.log(req.body)
   res.json({
    "msg":"hii there"
   })
})
app.listen(3007)