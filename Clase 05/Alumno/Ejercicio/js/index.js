var newCars = []
var car
var randomNumber = Math.random()

var cars = [
  {
    model: 'Suran',
    brand: 'volkswagen',
    year: 2015
  },
  {
    model: 'Audi TT',
    brand: 'Audi',
    year: 2017
  },
  {
    model: 'Gran turismo',
    brand: 'Maserati',
    year: 2018
  }
]

function Car (model, brand, year) {
  var id = Math.random()

  this.model = model
  this.brand = brand
  this.year = year

  this.getId = function () {
    return id
  }
  this.getCarName = function () {
    return this.model + this.brand + this.year
  }
}

for (var i = 0; i < cars.length; i++) {
  car = cars[i]

  newCar = new Car(car.model, car.brand, car.year)
  newCars.push(newCar)
}

//este e sun array de objetos planos
console.log(cars)

//este es un array de cars
console.log(newCars)

// console.log(newCars[0].getId())
// console.log(newCars[0].getCarName())

/*
console.log(newCars[0].getId())

var Suran = new Car('Suran', 'volkswagen', 2015)
var Audi_TT = new Car('Suran', 'volkswagen', 2015)

var Suran = new Car('Suran', 'volkswagen', 2015)
console.log(Suran.getId())

el this siempre es publico
el this.get es privado
tengo que hacer this

ver lo q esta comentado en el ejercicio del profe- 

push agrega un elemento al final del array

- verificar q sea un array 
- hacer copia del array
- eliminar el elemento


*/
