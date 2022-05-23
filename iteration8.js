const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];

  let repeat = []
  function repeatCounter() {
    counterWords.forEach(word => {
        repeat[word] = (repeat[word] || 0) + 1;
    });
}
repeatCounter();
console.log(repeat);