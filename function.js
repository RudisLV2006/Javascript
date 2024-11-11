function returnName(){
    console.log('Kristaps');
}

returnName();

function returnNameWithParameter(name){
    console.log(name);
}

returnNameWithParameter('Kristaps');

function numberLoop(){
    console.log('debug');
    for (let i = 1; i<=10; i++){
        console.log(i);
    }
}

numberLoop();


function writeBetween(start, end){
    if(start>end){
        return;
    }
    for (let i = start; i<=end; i++){
        console.log(i);
    }
}

writeBetween(4,8);