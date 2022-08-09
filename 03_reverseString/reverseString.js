const reverseString = function(text) {
    let ret= "";
    for(let i =0;  i<text.length;++i){
        ret=text.charAt(i)+ret;
}
return (ret);
}

// Do not edit below this line
module.exports = reverseString;
