let { S3 } = require('aws-sdk');
const dotenv = require('dotenv').config();

const fs = require('fs');
const s3Bucket = new S3({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.ACCESS_SECRET,
    region: process.env.REGION
});



//@function for uploading files in S3 bucket
module.exports.uploadS3 = async (file) => {
    try {
        console.log( process.env.BUCKET);
        let fileKey = file.originalname;
        let s3Key = fileKey
        var buffer = fs.readFileSync(file.path)
        var params = {
            Bucket: process.env.BUCKET,
            ContentType: file.mimetype ,
            Key: s3Key,
            Body: buffer
        };
        return new Promise((resolve, reject) => {
            s3Bucket.upload(params, async (err, data) => {
                if (err) {
                    reject(err.message);
                }
                console.log(data);
                return resolve(data.Location);
            });
        });
    } catch (err) {
        return (err)
    }
}

