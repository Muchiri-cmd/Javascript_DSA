//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  //replace underscores and spaces w hyphens n convert to lowercase
  return str
    .replace(/([a-z])([A-Z])/g,'$1 $2')//convert to kebab-case
    .replace(/\s+|_+/g,'-')//replace  spaces/underscores with hyphens
    .toLowerCase();//convert to lowercase
}

spinalCase('This Is Spinal Tap');