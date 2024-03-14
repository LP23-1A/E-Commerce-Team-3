import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { v4 } from "uuid"

const s3 = new S3Client({
    region: 'ap-southeast-1',
    // endpoint: process.env.ENDPOINT || '',
    credentials: {
        accessKeyId: process.env.ACCESS_KEY_ID || 'AKIAYS2NWDJJ2TVU44MQ',
        secretAccessKey: process.env.SECRET_ACCESS_KEY || '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',
    },
});

export async function GET(request: Request) {
    console.log(s3);


    try {
        const key = v4()
        const sign = await getSignedUrl(
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

        return Response.json({
            uploadUrls: sign,
            objectUrl: `https://team3-ecommerce.s3.ap-southeast-1.amazonaws.com/${key}`
        });

    } catch (error) {
        console.log(error);
        return Response.json({
            error,
            // accessUrls: keys.map((key) => process.env.PUB_URL + key),
        });
    }

}