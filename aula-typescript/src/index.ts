// string, boolean, number, ...
let x:number = 10;

x = 12;

console.log(x);

// inferencia x annotation
let y = 12;
// y = "teste";

let z: number = 12;

// tipos básicos
let firstName: string = "Matheus";
let age: number = 30;
const isAdmin: boolean = true;

// String != string

console.log(typeof firstName);

firstName = "João";

console.log(firstName);

// object
const myNumbers: number[] = [1, 2, 3];

console.log(myNumbers);
console.log(myNumbers.length);
/*console.log(myNumbers.toUpperCase);*/ // metodo não existe para tratar arrays
myNumbers.push(5);
console.log(myNumbers);

// tuplas
let myTuple: [number, string, string[]];

myTuple = [5, "teste", ["a", "b"]];

// myTuple = [true,false,true]

// object literals -> {prop: value}
const user: {name: string, age: number} = {
  name: "Pedro",
  age: 18,
};

console.log(user);

// user.job = "Programador"

// any
let a:any = 0;

a = "teste";
a = true;
a = [];

// union type
let id: string | number = "10";

id = 200;

// id = true
// id = []

// type alias
type myIdType = number | string;

const userId: myIdType = 10;
const productId: myIdType = "00001";
const shirId: myIdType = 123;

// enum
// tamanho de roupas (size: Médio, size: Pequeno)
enum Size {
  P = "Pequeno",
  M = "Médio",
  G = "Grande"
}

const camisa = {
  name: "Camisa gola V",
  size: Size.G
}

console.log(camisa);

// literal types
let teste: "autenticado" | null;

// teste = "outrovalor";
teste = "autenticado";
teste = null;

// funcoes
function sum(a:number, b:number){
  return a + b;
}

console.log(sum(12, 12));
// console.log(sum("12", true))

function sayHelloTo(name: string): string {
  return `Hello ${name}`
}

console.log(sayHelloTo("Lucas"));

function logger(msg: string): void {
  console.log(msg);
}

logger("Teste!");

function greeting(name: string, greet?: string): void{
  if(greet) {
    console.log(`Olá ${greet} ${name}`);
    return;
  }
    console.log(`Olá ${name}`);
}

greeting("José");
greeting("Pedro", "Sir");

//interfaces
interface MathFunctionParams {
  n1: number,
  n2: number
}

function sumNumbers(nums: MathFunctionParams){
  return nums.n1 + nums.n2;
}

console.log(sumNumbers({ n1: 1, n2: 2}));

function multiplyNumbers(nums: MathFunctionParams) {
  return nums.n1 * nums.n2;
}

const someNumbers: MathFunctionParams = {
  n1: 5,
  n2: 10,
};

console.log(multiplyNumbers(someNumbers));

// narrowing
// checagem de tipos 
function doSomething(info: number | boolean) {
  if(typeof info === "number"){
    console.log(`O número é ${info}`);
    return;
  }
  console.log("Não foi passado um número");
}

doSomething(5);
doSomething(true);

// generics
function showArraysItems<T>(arr: T[]) {
  arr.forEach((item) => {
    console.log(`ITEM: ${item}`);
  });
}

const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];

showArraysItems(a1);
showArraysItems(a2);

// classes
class User {
  name;
  role;
  isApproved;

  constructor(name: string, role: string, isApproved: boolean) {
    this.name = name;
    this.role = role;
    this.isApproved = isApproved;
  }

  showUserName() {
    console.log(`O nome do usuário é ${this.name}`);
  }

  showUserRole(canShow: boolean) {
    if (canShow) {
      console.log(`Privilégio do usuário é: ${this.role}`);
      return;
    }
    console.log("Informação restrita!");
  }
}

const zeca = new User("Zéca", "Admin", true);

console.log(zeca);

zeca.showUserName();