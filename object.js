const person = {firstName:'Kristaps', age:18 , isStudent:true};

console.log(person.firstName);
console.log(person['firstName']);

if(person['age'] >= 18){
    console.log('Tu esi pilngadīgs');
}else{
    console.log('To neesi pilngadīgs');
}
if(person.isStudent){
    console.log('Tu esi students');
}else{
    console.log("Tu neesi students");
}

person['course'] = 'PT2024';

console.log(person.course);