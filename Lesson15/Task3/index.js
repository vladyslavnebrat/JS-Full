// algo createLogger
// create empty array
// elements of array are messages in format of Objects
// input - none, output Object

// Algo Warn
// input string output none
// create message in format of { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }

const createLogger = () => {
  let newArr = [];

  function warn(messageWarn) {
    messageWarn = 'User is tring to ented restricted page';
    newArr.push({
      message: `${messageWarn}`,
      type: 'warn',
      dateTime: new Date(),
    });
  }

  function log(messageLog) {
    messageLog = 'User logged in';
    newArr.push({
      message: `${messageLog}`,
      type: 'log',
      dateTime: new Date(),
    });
  }

  function log(messageError) {
    messageError = 'User logged in';
    newArr.push({
      message: `${messageError}`,
      type: 'log',
      dateTime: new Date(),
    });
  }

  return {
    warn,
    log,
    error,
  };
};
const logger1 = createLogger();
console.log(logger1.warn('User is tring to ented restricted page'));

// Algo Error
// input string output none
// create message in format of { message: 'Unexpected error on the site', type: 'error', dateTime: Date }

// Algo log
// input string output none
// create message in format of { message: 'User logged in', type: 'log', dateTime: Date }
