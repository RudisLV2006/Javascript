function printBetweenNumber(num1, num2){
    if(num1>num2){
        return;
    }
    for (let index = num1; index <= num2; index++) {
        console.log(index);
    }
}
function returnName(){
    return "Kristaps";
}
function summarize(num1,num2){
    return num1+num2;
}
function biggerNumber(num1,num2){
    // if(num1>num2){
    //     return(num1);
    // }else{
    //     return(num2);
    // }

    return num1>num2 ? num1:num2;

    // return Math.max(num1,num2);
}


console.log(biggerNumber(5,9));


const myName = returnName();
console.log(myName);

console.log(summarize(12,9));


printBetweenNumber(9,12);