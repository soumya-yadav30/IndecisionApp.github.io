class Person{
    constructor(name="anonymous",age=0){
        this.name=name;
        this.age=age;
    }
    getGreeting(){
        return `HI! i am ${this.name}`;
    }
    getDescription() {
        //return "hi i am " + this.name;
        return `${this.name} is ${this.age} years old. `;
    }
}

class Student extends Person{
    constructor(name,age,major){
        super(name,age);
        this.major=major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description=super.getDescription();
        if(this.hasMajor()){
            description+=`the major is ${this.major}`
        }
        return description;
    }
}
class Traveler extends Person{
    constructor(name,age,location){
        super(name,age);
        this.location=location;
    }
    hasLocation(){
        return !!this.location;
    }
    getGreeting(){
        let greeting=super.getGreeting();
        if(this.hasLocation()){
            greeting+=` My location is ${this.location}`;
        }
        return greeting;
    }
}
const me=new Traveler("soumya yadav",21,"bhopal")
console.log(me.getGreeting());
const you=new Traveler()
console.log(you.getGreeting());