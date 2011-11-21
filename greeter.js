var Greeter = function(element, opts) {
  var greeter    = this,
      el         = element,
      step       = 0,
      timeout    = opts.delay || 3000,
      multiplier = opts.multiplier || 1,
      onEnd      = opts.onEnd || function() {},
      greetings  = [],
      
      greet = function(greeting) {
        element.innerHTML = greeting;
        step += 1;
        if (step < greetings.length) {
          run();
        } else {
          onEnd();
        }
      },
      run = function(delay) {
        delay = delay || (timeout = timeout * multiplier);
        window.setTimeout(greet, delay, greetings[step]);  
      },
      addGreetings = function(gs) {
        greetings = gs;
        return this;
      };
  return {
    run: run,
    addGreetings: addGreetings
  };
};