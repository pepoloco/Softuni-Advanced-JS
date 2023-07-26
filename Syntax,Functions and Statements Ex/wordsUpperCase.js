function solve(input) {
  const pattern = /\b[a-zA-Z']+\b/g;
  const matches = input.match(pattern);
  const extract = matches.map((word) => word.replace("'", "").toUpperCase());
  const result = extract.join(", ");
  console.log(result);
}

solve("Hi, how are you?");
