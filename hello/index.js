/**
 * @file Simple hello function to test that we can get a response from Azure Functions
 */

import asyncMessage from '../common/asyncMessage';


export default async (context) => {
  // NOTE: context.log NOT console.log
  // Azure will show context.log() calls in the streaming logs (e.g. sls logs -f hello)
  context.log.info('Hello Azure context logging.');

  const message = await asyncMessage({ delay: 1, text: 'Your function executed successfully!' });
  context.res = {
    status: 200, // The HTTP status code of the response.
    body: `Go Serverless! ${message}`
  };
};
