/**
 * To prevent the following warning that comes with React 16 while running tests:
 * "Warning: React depends on requestAnimationFrame. Make sure that you load a polyfill in older browsers. http://fb.me/react-polyfills"
 * https://github.com/facebook/jest/issues/4545
 */

global.requestAnimationFrame = (callback) => {
    setTimeout(callback, 0);
};
