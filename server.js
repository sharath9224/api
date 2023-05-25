const express = require('express');
const mongoose = require('mongoose')
const app  = express();
const city = require('./model');


app.use(express.json())


mongoose.connect('mongodb+srv://sharath9224:sharath9224@cluster0.28ggykl.mongodb.net/?retryWrites=true&w=majority').then(
    () => console.log('DB connected...')
).catch(err => console.log(err))

app.post('/addsectors',async (req,res) => {
    const {sector} = req.body ;
    try{
        const newData = new city({sector});
        newData.save();
        return res.json(await city.find())

    }
    catch(err){
        console.log(err.msg);
    }

})
app.get('/getallsectors',async(req,res) =>{
    try{
        
        }
        catch(err){
            console.log(err.msg);
      
    }
   
})
app.get('/getallsectors/:id',async(req,res) => {
    try{
        const Data = await city.findmyId(req.params.id)
        return res.json(Data);
    }
    catch(err){
        console.log(err.msg);
    }  
})

app.listen(3000,()=>console.log('server running ....'))