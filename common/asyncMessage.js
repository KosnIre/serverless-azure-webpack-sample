/**
 * @file Creates a delayed response for the purpose of demonstrating asynchronous behavior.
 */


/**
 * Returns a Promise that resolves with given text after a set delay
 *
 * @param  {Number} delay - Number (in seconds) to wait before resolving the Promise
 * @param  {String} text - Text to resolve with
 * @return {Promise} Promise
 */
export default function asyncMessage({ delay, text }) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${text} (with a delay)`);
    }, delay * 1000);
  });
}
