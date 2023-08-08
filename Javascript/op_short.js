/*Use object property shorthand with object literals to create and return an object 
with name, age and gender properties.*/

const createPerson = (name, age, gender) => ({
    name,
    age,
    gender
  });
  
  // Example usage:
  const person = createPerson("John", 30, "male");
  console.log(person); // Should output { name: 'John', age: 30, gender: 'male' }
  