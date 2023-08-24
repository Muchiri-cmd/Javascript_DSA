function sentensify(str){
    let arr=str.split(/[^A-Za-z]/);
    console.log(arr);
    return arr.join(" ");
}

sentensify("May-the-force-be-with-you");