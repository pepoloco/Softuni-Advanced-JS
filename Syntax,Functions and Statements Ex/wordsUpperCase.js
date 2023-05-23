function wordsUppercase(input) {
  let res = input
    .toUpperCase()
    .match(/\b\w+\b/g)
    .join(", ");

  console.log(res);
}
wordsUppercase("Hi, how are you?");
