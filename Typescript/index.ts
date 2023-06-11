//String
var a : string = "Vaibhav";
console.log(a);

//number
var b : number = 12;
console.log(b);

var c:boolean=true;
console.log(c);

var d:any='demo';
console.log(d);

var e:string[]=['2','4','abc'];
console.log(e);

var f:number[]=[2,4,6];
console.log(f);

var g:any[]=[2,'abc',true];
console.log(g);

//void consider as empty
function abc():void{
    console.log("Hello");
}
abc();

function xyz(a:number,b:number):any
{
  console.log(a*b);
}
xyz(3,4);

//using | we can insert multiple datatypes
var h:string|undefined='';

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
class person{
  protected name:string;
}
class Person{
  constructor(protected id:number,protected name:string){
    this.id=id;
    this.name=name;
  }
  getFullname():string{
    return`${this.id} ${this.name}`
  }
}
