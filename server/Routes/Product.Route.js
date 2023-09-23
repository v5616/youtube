const express = require('express');
const router = express.Router()
const Product = require("../Models/Producs.model")

router.get('/',  async(req, res)=>{
    try {
        const results = await Product.find()
        console.log(results.length)
        if(results.length > 6){
            res.status(200).send({status:200,message:"successfully get products",response:results.reverse().filter((ele,ind)=>{
                return ind<6
            })})

        }else{
            res.status(200).send({status:200,message:"successfully get products",response:results.reverse()})
        }
    } catch (error) {
        res.status(400).send({status:400,message:error,response:[]})
    }
})

router.post("/",(req,res)=>{
    // console.log(req.body)
    const Producs = new Product({
        name: req.body.name,
        revenue:req.body.revenue,
        subscriber:req.body.subscriber,
        monetized  :req.body.monetized,
        language:req.body.language,
        category:req.body.category,
        tag:req.body.tag
    })
    Producs.save()
    .then(result=>{
        console.log(result,"ddddddddddddddd")
    })
    res.status(200).send({status:200,message:"successfully created"})
})


module.exports =router