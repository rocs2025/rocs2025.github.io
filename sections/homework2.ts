//let number0fLines = 0;

//function increaseLineNumber(){
    //number0fLines++;
  //  console.log('Linea #',number0fLines);
//}


//increaseLineNumber()
//increaseLineNumber()
//increaseLineNumber()
//increaseLineNumber()//

/*/*let person = {
  name: 'Rodrigo',
  age: 15,
  isActive:true,
  hobbies: ['Programar','Soccer']
}
console.log(person.name);
//
let car ={
  color: 'White',
  traction: '4x4',
}
let smartTv ={
  sizeInches: 50,
  brand: 'samsung',
}
let youtubeVideo ={
  format: 'mp4',
  duration: '50s'
}
console.log(car);
console.log(smartTv);
console.log(youtubeVideo);

/*/
/*/
class Car {

    static className = 'Carro';

    public readonly brand: string;
    public doors: number;
    public fuelTank: number;
    public isRunning: boolean;
    public type: string;

    private readonly createdAt: number;

    constructor( brand: string, type: string ) {
        this.brand = brand;
        this.doors = 0;
        this.fuelTank = 0;
        this.isRunning = false;
        this.type = type;

        this.createdAt = 123456789;
    }

    public turnOn() {

        if ( this.isRunning ) {
            console.log('El carro ya estaba enecendido.... se daño el motor.');
            return;
        }

        if ( this.fuelTank <= 0 ) {
            console.log('El carro no tiene gasolina');
            return;
        }
        
        this.isRunning = true;
        console.log('El carro está encendido');
    }

    /*
        gas: number
        gas > 100, this.fuelTank = 100
        gas tiene positivo
        si ya está lleno, no sobre llenar
        si el tanque es 50 y añado 20, el valor del fuelTank sería 70
        si fuelTank es 90, y añado 50, fuelTank debería de ser 100
    */
    /*/fillTank( gas: number ) {
        if ( gas <= 0 ) {
            console.log('El gas tiene que ser positivo');
            return;
        }

        let newFuelTank = this.fuelTank + gas;
        if ( newFuelTank >= 100 ) {
            newFuelTank = 100;
        }
          
        this.fuelTank = newFuelTank;
    }

}
/*/
/*/
let myMazda = new Car('Mazda','Sedan');
// myMazda.brand;
// myMazda.type  = 'Sedan';
// console.log( myMazda.createdAt ); // private


console.log( myMazda );
myMazda.fillTank(50);
myMazda.fillTank(20);
// myMazda.fillTank(50);
myMazda.turnOn();
console.log( myMazda );


console.log( Car.className );
/*/
export

let kms = 10;
let miles = kms*0.621371;
console.log('10 kms son: '+miles+ '' +'millas')