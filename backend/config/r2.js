import "dotenv/config";
import { S3Client } from "@aws-sdk/client-s3";

console.log("========== R2 CONFIG ==========");
console.log("ACCOUNT:", process.env.R2_ACCOUNT_ID);
console.log("ACCESS:", process.env.R2_ACCESS_KEY_ID);
console.log("SECRET:", process.env.R2_SECRET_ACCESS_KEY);
console.log("BUCKET:", process.env.R2_BUCKET_NAME);
console.log("PUBLIC:", process.env.R2_PUBLIC_URL);

const r2 = new S3Client({

    region: "auto",

    endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,

    credentials: {

        accessKeyId: process.env.R2_ACCESS_KEY_ID,

        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY

    }

});

export default r2;