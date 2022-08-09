const repeatString = function(text,times) {

    if(times===undefined){
        return (text.repeat(Math.floor(Math.random()*10)))
    }
    if(!text || times==0){
        return ('')
    }

    if (times<0){
        return ("ERROR")
    }
    return (text.repeat(times))

    
};

// Do not edit below this line
module.exports = repeatString;
