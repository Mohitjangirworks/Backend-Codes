const express= require("express");
const app=express();
app.get("/health-checkup",(req,res)=>{
    const username=req.headers.username;
    const password=req.headers.password; //header parms
    const kidneyId=req.query.kidneyId;   //query parms
    if(username!="mohit" || password!="pass"){ //auth done
        //do something with kidneys here
        res.status(400).json({
            "msg": "Somethingsup with ur inputs"
        })
        return
    }
    if(kidneyId!="1"&&kidneyId!="2"){
        res.status(400).json({
            "msg": "Somethingsup with ur inputs"
        })
        return
    }
    res.json({
        msg: "Your kidney is fine!"
    })
});
app.listen(3002)