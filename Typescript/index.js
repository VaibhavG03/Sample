//String
var a = "Vaibhav";
console.log(a);
//number
var b = 12;
console.log(b);
var c = true;
console.log(c);
var d = 'demo';
console.log(d);
var e = ['2', '4', 'abc'];
console.log(e);
var f = [2, 4, 6];
console.log(f);
var g = [2, 'abc', true];
console.log(g);
//void consider as empty
function abc() {
    console.log("Hello");
}
abc();
function xyz(a, b) {
    console.log(a * b);
}
xyz(3, 4);
//using | we can insert multiple datatypes
var h = '';
//we can use ! to define undefined
//var i!:string='';
// function addnumbers(...number){
//   var i;
//   var sum:number=0
//   for(i=0;i<number.length;i++){
//     sum=sum+number[i]
//   }
//   console.log("the sum of numbers is: ",sum)
// }
// addnumbers(1,2,3)
// //access modifiers
// //1)Private modifiers
// class Person{
//   private id:number;
//   private firstname:string;
//   private lastname:string;
//   constructor(id:number,firstname:string,lastname:string){
//     this.id=id;
//     this.firstname=firstname;
//     this.lastname=lastname;
//   }
//   getFullname():void{
//     document.write(`${this.firstname} ${this.lastname}`)
//   }
// }
// let per=new Person(1,'test','abc')
//public modifier
// class person{
//   id:number;
//   firstname:string;
//   lastname:string;
//   constructor(id:number,firstname:string,lastname:string){
//     this.id=id;
//     this.firstname=firstname;
//     this.lastname=lastname;
//   }
//   getFullname():void{
//     document.write(`${this.firstname} ${this.lastname}`)
//   }
// }
// let per=new person(1,'test','abc')
// console.log(per.id)
//protected modifier
var person = /** @class */ (function () {
    function person() {
    }
    return person;
}());
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
        this.id = id;
        this.name = name;
    }
    Person.prototype.getFullname = function () {
        return "".concat(this.id, " ").concat(this.name);
    };
    return Person;
}());
