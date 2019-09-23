const mongodb = require('../../database/mongodb/connection');
const aws = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const s3 = new aws.S3({ 
    accessKeyId: process.env.AWS_ACCESS_KEY_ID, 
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_ID,
    region: process.env.AWS_DEFAULT_REGION
});

const uploadSchema = mongodb.Schema({
    
    name: {
        type: String
    },

    size: {
        type: Number
    },

    key: {
        type: String
    },

    url: {
        type: String
    },

    user: {
        type: mongodb.Schema.Types.ObjectId,
        ref: 'cl_users_uploads',
        required: true
    },

    comments: [{
        type: Object,
        timestamps: true
    }]
},
{
    timestamps: true
});

uploadSchema.pre('remove', function (){
    
    if(process.env.STORAGE_TYPE === 's3'){
                
        return s3.deleteObject({
            Bucket: process.env.BUCKET_NAME,
            Key: this.key

        }).promise();

    } else {

        return promisify(fs.unlink)(path.join(__dirname, '../../../tmp/uploads/', this.key));
    }
});

module.exports = mongodb.model('cl_upload', uploadSchema);
