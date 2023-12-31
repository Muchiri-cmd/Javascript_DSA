/*Use destructuring assignment within the argument to the function half 
to send only max and min inside the function.*/

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  // Destructuring max and min properties from the argument
  const half = ({ max, min }) => (max + min) / 2.0;
  
  console.log(half(stats)); // Should output 28.015
  