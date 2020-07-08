sumOfNegative = (numbers) => {
  // TODO: You are getting a `numbers` array. Return the sum of **negative** numbers only.
}


const myArray2 = [0, -1, 3, -2, 4],
negative = myArray2.filter(function(a)
  {return a < 0; }),
sum = negative.reduce(function(a,b)
  {return a + b;});
console.log(sum);



















