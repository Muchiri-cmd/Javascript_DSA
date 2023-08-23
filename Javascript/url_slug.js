/*Fill in the urlSlug function so it converts a string title and 
returns the hyphenated version for the URL*/

function urlSlug(title) {
    // Convert title to lowercase && split
    const words = title.toLowerCase().split(" ");
    
    // Remove empty strings and create a new array
    const filteredWords = words.filter(word => word !== "");
    
    // Create slug
    const slug = filteredWords.join("-");
    
    return slug;
  }
  
  urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
  