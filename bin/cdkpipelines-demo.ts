#!/usr/bin/env node
/*
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkpipelinesDemoStack } from '../lib/cdkpipelines-demo-stack';

const app = new cdk.App();
new CdkpipelinesDemoStack(app, 'CdkpipelinesDemoStack');
*/

import { App } from '@aws-cdk/core';
import { CdkpipelinesDemoPipelineStack } from '../lib/cdkpipelines-demo-pipeline-stack';

const app = new App();

new CdkpipelinesDemoPipelineStack(app, 'CdkpipelinesDemoPipelineStack', {
  env: { account: '827697008625', region: 'ap-northeast-1' },
});

app.synth();
