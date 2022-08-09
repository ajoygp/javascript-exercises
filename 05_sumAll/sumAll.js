const sumAll = function(a,b) {
    if(typeof(a)!='number'|| typeof(b)!='number' ){
        return('ERROR');
    }

    if(a<0 || b<0 ){
        return('ERROR');
    }

    startint= a<b?a:b;
    endint= a<b?b:a;
    sum=0;
    for(let i=startint;i<=endint;i++){
        sum+=i;
    }
    return(sum);


};

// Do not edit below this line
module.exports = sumAll;
