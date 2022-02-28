import { Bucket, BucketEncryption } from '@aws-cdk/aws-s3';
import * as cdk from "@aws-cdk/core";

export class TypescriptCdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new Bucket(this, 'DocumentsBucket',{
      encryption: BucketEncryption.S3_MANAGED
    });

    new cdk.CfnOutput(this, 'DocumentsBucketNameExport',{
      value: bucket.bucketName,
      exportName: 'DocumentsBucketName'
    })
   

  }
}
