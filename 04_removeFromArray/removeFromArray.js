const removeFromArray = function(list,...remove) {
    for(let i=0;i<remove.length;i++){
        removeIndex=list.indexOf(remove[i])
        if(removeIndex<0){
            continue;
        }
        list.splice(removeIndex,1);
    }
    return (list);

};

// Do not edit below this line
module.exports = removeFromArray;
