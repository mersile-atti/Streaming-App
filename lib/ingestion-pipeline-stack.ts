import * as cdk from '@aws-cdk/core';
import { IngestionPipeline } from './ingestion-pipeline';

export class IngestionPipelineStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new IngestionPipeline(this, 'IngestionPipeline');
  }
}