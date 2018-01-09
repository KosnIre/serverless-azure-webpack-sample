/**
 * @file Simple hello function to test that we can get a response from Azure Functions
 */

import sortFood from './foodSorter';


const MY_FOOD = ['banana', 'kiwi', 'chicken', 'milk', 'cheese', 'apple'];

export async function handler(context) {
  // NOTE: context.log NOT console.log
  // Azure will show context.log() calls in the streaming logs (e.g. sls logs -f hello)
  context.log.info('Hello Azure context logging.');

  const sortedFood = JSON.stringify(sortFood(MY_FOOD));

  context.res = {
    status: 200, // The HTTP status code of the response.
    body: `Your food looks like: ${sortedFood}`
  };
}
