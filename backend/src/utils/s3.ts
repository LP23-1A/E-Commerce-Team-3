import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { v4 } from "uuid"
import dotenv from "dotenv"
import { promisify } from "util"
import crypto from "crypto"
import { Request, Response } from "express";

dotenv.config()

const randomBytes = promisify(crypto.randomBytes)

const s3 = new S3Client({
  region: process.env.REGION,
  endpoint: process.env.PUBLIC_ENDPOINT,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY || "",
    secretAccessKey: process.env.SECRET_ACCESS_KEY || ""
  }
})


const bucketName = "team3-ecommerce"

const generateUrl = async (req: Request, res: Response) => {

  try {
    // const rawBytes = randomBytes(16)
    // const ImageName = rawBytes.toString()

    // const params = ({
    //   Bucket: bucketName,
    //   key: ImageName,
    //   expires: 60
    // })

    // const uploadUrl = await s3.getSignedUrlPromise("putObject", params)
    // console.log(uploadUrl);

    const key = v4()

    const signUrl = await getSignedUrl(
      s3,
      new PutObjectCommand({
        Bucket: 'team3-ecommerce',
        Key: key,
        ACL: 'public-read',
      }),
      {
        expiresIn: 60 * 60,
      }
    )


    return res.json({ signUrl })

  } catch (error: unknown) {
    console.log(error)
    throw new Error("interrupted")
  }

}

export { generateUrl }