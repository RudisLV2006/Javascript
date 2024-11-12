const car = {mark:'Ferrari', model:'5', year:2024};

console.log(car.mark);
console.log(car['mark']);

let currentYear = new Date().getFullYear();

if(currentYear-car['year'] <10){
    console.log('Mašīnai ir jaunāka par 10 gadiem');
}else{
    console.log('Mašīna ir vecāka par 10 gadiem');
}

if(car["mark"] === 'Toyota'){
    console.log("Šī ir Toyota automašīna");
}

car['owner'];