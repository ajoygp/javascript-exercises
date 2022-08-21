const findTheOldest = function(people) {
    let findAge=function (person){
        yearOfDeath=person.yearOfDeath? person.yearOfDeath:new Date().getFullYear()
        return (yearOfDeath- person.yearOfBirth )
    }  
    return people.sort((a,b)=>findAge(b)-findAge(a))[0];
    
     
};

// Do not edit below this line
module.exports = findTheOldest;
