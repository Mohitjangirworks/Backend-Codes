// //creating a express serverice 
const express =require("express");
const app=express();

var users=[{
    name: "Roushan",
    kidneys: [{
        healthy: false
    }]
}]
app.use(express.json());
//quary req
app.get("/",function(req,res){  //get route handler
    const Roushankidneys=users[0].kidneys
    const numberOfKidneys=Roushankidneys.length;
    let numberOfhealthyKidneys=0;
    for(let i=0;i<Roushankidneys.length;i++){
        if(Roushankidneys[i].healthy){
            numberOfhealthyKidneys++;
        }
    }
    const numberOfUnhealthyKidneys=numberOfKidneys-numberOfhealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfUnhealthyKidneys,
        numberOfhealthyKidneys
    })
})
app.post("/",function(req,res){
    const isHealthy=req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "done!"
    })
})

app.put("/",function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }
    req.json({})
})


app.delete("/",function(req,res){
    //only if atleast kidney is there do this , else return 411
    if(isThereAtLeastOneHealthyKidneys()){

        const newkidneys=[]
        for(let i=0;i<users[0].kidneys.length;i++){
    
            if(users[0].kidneys[i].healthy){
                newkidneys.push({
                    healthy:true
                })
            }
        }
        users[0].kidneys=newkidneys
        res.json({msg: "done"})
    }
    else{
        res.status(411).json({
            msg: "You have no Bad kidneys"
        })
    }
})

function isThereAtLeastOneHealthyKidneys(){
    let atLeastOneHealthyKidneys=false;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atLeastOneHealthyKidneys=true;
        }
    }
    return atLeastOneHealthyKidneys
}

app.listen(3000)