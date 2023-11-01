const express = require('express');
const router = express.Router()
const multer = require('multer')
const Product = require("../Models/Producs.model");
const s3upload = require("../Middleware/s3uplod");
const storage = multer.diskStorage({

});

//@function for seperating (form data)data
const upload = multer({ storage: storage });

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

router.post("/",upload.single('file'),async (req,res)=>{
    // console.log(req.body)
    if(req.file){
       var s3image = await s3upload.uploadS3(req.file)
    }
    const Producs = new Product({
        name: req.body.name,
        revenue:req.body.revenue,
        subscriber:req.body.subscriber,
        monetized  :req.body.monetized,
        language:req.body.language,
        category:req.body.category,
        tag:req.body.tag,
        image:s3image
    })
    Producs.save()
    .then(result=>{
        console.log(result,"ddddddddddddddd")
    })
    res.status(200).send({status:200,message:"successfully created"})
})


module.exports =router