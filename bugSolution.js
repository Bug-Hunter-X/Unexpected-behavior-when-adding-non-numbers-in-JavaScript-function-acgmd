function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }

  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Handle non-number inputs
  }

  return a + b; 
}

//Example usage
console.log(foo(5,3)); //8
console.log(foo(null, 5));//0
console.log(foo(5, null));//0
console.log(foo("5", 3));//NaN
console.log(foo(5, "3"));//NaN