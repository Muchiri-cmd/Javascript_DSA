function truthCheck(collection, pre) {
    // Iterate through each object in the collection
    for (let obj of collection) {
      // Check if the property value is falsy
      if (!obj[pre]) {
        return false; // If any object has a falsy value, return false
      }
    }
    
    // If all objects have truthy values for the property, return true
    return true;
  }
  
  // Test the function
  const result = truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");
  console.log(result); // Output should be false, since the last object has "isBot" as true
  