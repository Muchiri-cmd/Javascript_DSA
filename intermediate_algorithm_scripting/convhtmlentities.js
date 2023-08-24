/*Convert the characters &, <, >, " (double quote), and ' (apostrophe),
in a string to their corresponding HTML entities.*/

function convertHTML(str) {
  const entityMap={
    '&':'&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'

  };
  return str.replace(/[&<>"']/g,match=>entityMap[match]);
}

convertHTML("Dolce & Gabbana");