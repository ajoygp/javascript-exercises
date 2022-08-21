const palindromes = function (str) {
    str=str.replace(/[^a-zA-Z ]/g,"").toLowerCase().replaceAll(" ","");
    return (str==str.split("")
                .reverse()
                .join("")
                .replaceAll(" ",""))
    
};

// Do not edit below this line
module.exports = palindromes;
