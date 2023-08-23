function uniteUnique(...arrays) {
  const result=[];

  arrays.forEach(arr=>{
    arr.forEach(value=>{
      if (!result.includes(value)){
        result.push(value)
      }
    });

  });
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);