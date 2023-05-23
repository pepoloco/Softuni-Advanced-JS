function generateSequence(n, k) {
  let sequence = [1];
  for (let i = 1; i < n; i++) {
    let sum = 0;

    for (let j = i - 1; j >= i - k && j >= 0; j--) {
      sum += sequence[j];
    }

    sequence.push(sum);
  }

  return sequence;
}

console.log(generateSequence(6, 3));
