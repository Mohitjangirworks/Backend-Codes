const express = require("express");
const app = express();

const userMiddleware = (req, res, next) => {  //defining middleware
    const username = req.headers.username;
    const password = req.headers.password;
    if (username != "mohit" || password != "pass") { //auth done
        //do something with kidneys here
        res.status(400).json({
            "msg": "Check again Your paas or username"
        })
    }
    else {
        next(); //1st check is done call next function
    }
}

function kidneyMiddleware(req, res, next){
    const kidneyId = req.query.kidneyId;   //query parms
    if (kidneyId != "1" && kidneyId != "2") {
        res.status(400).json({
            "msg": "I think You are not a human"
        })
    }
    else{
        next(); //check next method
    }
}

app.get("/health-checkup",userMiddleware,kidneyMiddleware, (req, res) => {
    //header parms
    res.json({
        msg: "Your kidney is fine!"
    })



});
app.listen(3004)




//Popular middleware-- how many req is comes to my page
/* 
let noOfRequest=0;
function calculateRequests(req,res,next){
    noOfRequest++;
    console.log(noOfRequest);
    next();
}
app.get("/health-checkup",calcuateRequests,function(req,res){
   res.send("req coming");
})
*/