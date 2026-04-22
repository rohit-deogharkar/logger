const originals = {
    log:   console.log,
    warn:  console.warn,
    error: console.error,
    info:  console.info,
    debug: console.debug,
    trace: console.trace,
  };
  
  function getTimestamp() {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm   = String(now.getMonth() + 1).padStart(2, '0');
    const dd   = String(now.getDate()).padStart(2, '0');
    const hh   = String(now.getHours()).padStart(2, '0');
    const min  = String(now.getMinutes()).padStart(2, '0');
    const ss   = String(now.getSeconds()).padStart(2, '0');
    const ms   = String(now.getMilliseconds()).padStart(3, '0');
    return `${yyyy}-${mm}-${dd} ${hh}:${min}:${ss}.${ms}`;
  }
  
  console.log   = function (...args) { originals.log(  `[${getTimestamp()}] [LOG]  `, ...args); };
  console.warn  = function (...args) { originals.warn( `[${getTimestamp()}] [WARN] `, ...args); };
  console.error = function (...args) { originals.error(`[${getTimestamp()}] [ERROR]`, ...args); };
  console.info  = function (...args) { originals.info( `[${getTimestamp()}] [INFO] `, ...args); };
  console.debug = function (...args) { originals.debug(`[${getTimestamp()}] [DEBUG]`, ...args); };
  console.trace = function (...args) { originals.trace(`[${getTimestamp()}] [TRACE]`, ...args); };