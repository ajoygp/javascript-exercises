const palindromes = function (str) {
    str=str.replace(/[^a-zA-Z ]/g,"").toLowerCase().replaceAll(" ","");
    rev=str.split("").reverse().join("").replaceAll(" ","");
    return (rev==str)
};

// Do not edit below this line
module.exports = palindromes;
