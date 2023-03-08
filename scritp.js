// homework 1 extands

class Flowers {
    constructor(name, color, leaf, smell) {
        this.name = name;
        this.color = color;
        this.leaf = leaf;
        this.smell = smell;
        this.plow = fertilizing();
        this.thorn =  function piercing(){
            console.log(`the ${name} have pearsing property and ${this.leaf}`);
        }
    }
    
}
function fertilizing() {
    console.log(`the ${this.name} have fertilizing property and ${this.smell} smell`);
};
class Rose extends Flowers {
    constructor(name, color, leaf, smell) {
        super(name, color, leaf, smell)
        
    }
}

class Clove extends Rose {
    constructor(name, color, leaf, smell) {
        super(name, color, leaf, smell)
    }
}

class Tulip extends Flowers {
    constructor(name, color, leaf, smell) {
        super(name, color, leaf, smell)
    }
}

const rose = new Rose(`Rose`,'red','green leaf','nice')


let bouquet = [
    new Rose(rose),
    new Clove('Clove', 'white', 'green leaf', 'beautiful'),
    new Tulip('tulip', 'yellow', 'green leaf', 'smell')
]

class Flower {
    constructor(arr) {
        this.arr = arr
    }
    static count(arr) {
        console.log(arr.length);
      }
}
Flower.count(bouquet)



// homework 2 extends (public,protected)

class Vehicle {
    constructor(name,color,numberՕfWeels,numberOfDoors) {
        this.name = name;
        this.color = color;
        this.numberՕfWeels = numberՕfWeels;
        this.numberOfDoors = numberOfDoors;
    }
}

class Car extends Vehicle {
    constructor(name,color,numberՕfWeels,numberOfDoors){
        super(name,color,numberՕfWeels,numberOfDoors)
    }
}

class Truck extends Vehicle {
    constructor(name,color,numberՕfWeels,numberOfDoors){
        super(name,color,numberՕfWeels,numberOfDoors)
    }
}

let vehicle = new Vehicle ('any','any','4','4')
let car = new Car ('mazda','green','4','4')
let truck = new Truck('DAF','white','4','4')  // pahanj@ anhaskanali e
console.log(car);
console.log(truck);

// protected tesak@ taki gcikov e(_), set u get-ov petq e ashxatel
//privatn el # aysinq inq@ vochmi tex baci ira mijic hasaneli che



// homework 3


class ArramSum extends Array{
    constructor(value){
        super(value)
        this.value = value;
        let count = 0;
        this.sum = function sum (){
            for (let index = 0; index < this.value.length; index++) {
                const element = this.value[index];
                if (typeof element==='number'){
                    count += element;
                    
                }
            }
            return count;


        }
    }
}

let arr = new ArramSum([6,10,666,'3'])
console.log(arr.sum());



// homework 4

let text = "lorem ipsum is a dolar"
function upperCaseFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.substring(1);
  }
function toUpper(sentence){
    let strArray = sentence.split(" ");
  
    strArray = strArray.map((str) => {
      return upperCaseFirstLetter(str);
    });
  
    return strArray.join(" ");
  }
  
  
  console.log(toUpper(text));