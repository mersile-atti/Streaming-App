import * as cdk from '@aws-cdk/core';
import * as include from '@aws-cdk/cloudformation-include';

import * as path from 'path';

export class IngestionPipeline extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string) {
    super(scope, id);

    // The code that defines your construct goes here
     const template = new include.CfnInclude(this, 'Template', {
      templateFile: path.join(__dirname, '../templates/aws-kinesis-streaming-solution.json'),
        parameters: {
        ShardCount: 2,
        RetentionHours: 24,
        EnableEnhancedMonitoring: 'false',
        BufferingSize: 5,
        CompressionFormat: 'GZIP',
      },
        preserveLogicalIds: false,
         
     });
  }
}