const receivesAFunction = (callback) => {
    if (typeof callback == 'function') {
      callback(); // The callback function
    } else {
      new Error('Parameter must be a function');
    }
  };

  const returnsANamedFunction = () => {
    function namedFunction() {
    }

    return namedFunction;
  };

  const returnsAnAnonymousFunction = () => {
    // No function
    return function() {

    };
  };
  