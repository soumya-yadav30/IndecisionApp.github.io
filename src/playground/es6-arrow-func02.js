//arrow function no longer bound with arrow function

const add=(a,b) =>{
    return(a+b);
};
console.log(add(55,1));

//this keyword - no longer bound
const user={
    name:"soumya yadav",
    city:["harda","indore","bhopal"],
    placeLived: function() {
        this.city.forEach((x) => {
            console.log(this.name+" lived in city"+x);
        });
    }
};
user.placeLived();

//map
const multiplier={
    numbers:[1,3,7,8],
    same:5,
    multiply(){
        return this.numbers.map((x) => this.same*x);
    }
};
console.log(multiplier.multiply());