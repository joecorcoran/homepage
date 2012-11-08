window.onload = function() {
  var greeter = new Greeter(document.getElementById('greeting'), { 
    multiplier: 1.2,
    onEnd: function() {
      document.getElementsByClassName('secondary')[0].style.display = 'block';
    }
  });
  greeter.addGreetings([
    'You\'re still here.',
    'I\'m sorry that there isn\'t much to see.',
    'It\'s difficult to know what to tell you about myself.',
    'I\'m not keen on writing autobiographically.',
    'Maybe I should come up with something witty.',
    '&hellip;',
    'Yeah.',
    'You should probably just check out one of these links:'
  ]);
  greeter.run(10000);
};