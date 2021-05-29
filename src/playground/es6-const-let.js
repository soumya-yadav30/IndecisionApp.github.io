var nameVar="soumya";
var nameVar="pooja";
console.log('nameVar',nameVar);

let nameLet="omesha";
console.log("nameLet",nameLet);

//block scoping
const fullname="soumya yadav";
let fname;
if(fname){
    fname=fullname.split(' ')[0];
    console.log(fname);
}
console.log(fname);