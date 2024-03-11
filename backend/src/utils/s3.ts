import aws, { S3 } from "aws-sdk"
import dotenv from "dotenv"
import {promisify} from "util"
import crypto from "crypto"
import { Request, Response } from "express";

dotenv.config()

const randomBytes = promisify(crypto.randomBytes)

const s3 = new aws.S3({

  region : process.env.REGION,
  accessKeyId : process.env.ACCESS_KEY,
  secretAccessKey : process.env.SECRET_ACCESS_KEY,
  signatureVersion : "v4"

})


const bucketName = "team3-ecommerce"

const generateUrl = async ( req:Request , res:Response) => {

try {
  const rawBytes =  randomBytes(16)
  const ImageName = rawBytes.toString() 

  const params = ({
    Bucket : bucketName,
    key : ImageName ,
    expires : 60
  })

  const uploadUrl = await s3.getSignedUrlPromise("putObject" , params)
    return res.json({uploadUrl})

} catch (error:unknown) {
  throw new Error("interrupted")
}

}

export {generateUrl}