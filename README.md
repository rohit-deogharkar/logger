# better-logs

Overrides `console.log` to prefix every log with a precise timestamp.

**Format:** `[YYYY-MM-DD HH:MM:SS.mmm]`

## Install from GitHub

```bash
npm install github:YOUR_USERNAME/better-logs
```

## Usage

Just require it once at the very top of your entry file (e.g. `index.js` or `app.js`):

```js
require('better-logs');

// Now use console.log normally anywhere in your app
console.log('Server started');
// → [2025-04-22 10:45:23.412] Server started

console.log('User:', { id: 1, name: 'Alice' });
// → [2025-04-22 10:45:23.413] User: { id: 1, name: 'Alice' }

console.log('Values:', 1, true, [1, 2, 3]);
// → [2025-04-22 10:45:23.414] Values: 1 true [ 1, 2, 3 ]
```

> ✅ Zero dependencies  
> ✅ Works with all argument types (objects, arrays, primitives)  
> ✅ No overhead — uses native `Date` directly  

## Notes

- Import **once** at the top of your app entry point — it patches `console.log` globally for the entire process.
- `console.warn`, `console.error` etc. are untouched (you can extend this package to cover those too).