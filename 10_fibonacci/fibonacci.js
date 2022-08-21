const fibonacci = function(n) {
    if(typeof(n)==Text){
        if (!n.match(/^[0-9]+$/)  ){

            return("OOPS");
        }
    }

    if(n<0 ){
        return("OOPS");
    }

    let ret=1;
    let prev=0;

    for(let i=0;i<n-1;i++){
        let temp=ret;
        ret=ret+prev;
        prev=temp;
    }
    return (ret);
};

// Do not edit below this line
module.exports = fibonacci;
