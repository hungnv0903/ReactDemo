const student = {
    name: 'John',
    scores: [90, 85, 88],
    arr : {
        adress:"HN",
        age:18,
        color: ['red' , 'blue' , 'yellow'],
    }
};

const {scores } = student;
const [math, science, english] = scores;
const {arr} = student ; 
const {color:[red , blue , yellow]} = arr ; 

// console.log(name) ; 
console.log(math) ; 
console.log(science) ; 
console.log(english) ; 


console.log(red) ; 