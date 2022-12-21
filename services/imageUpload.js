import { S3 } from "aws-sdk";
import s3 from "../config/s3.config";

export const s3FileUpload = async ({ bucketName, key, body }) => {
  return await s3
    .upload({
      Bucket: bucketName,
      Key: key,
      Body: body,
      ContentType: contentType,
    })
    .promise();
};

export const deleteFile = async ({ bucketName, key }) => {
  return await S3.deleteObject({
    Bucket: bucketName,
    key: key,
  }).promise();
};
