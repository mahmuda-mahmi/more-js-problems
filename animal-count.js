function animalCount(miles) {
       const animalsFirst10miles = 10;
       const animalsSecond10miles = 50;
       const animalsRestMiles = 100;
       if (miles <= 10) {
              const count = miles * animalsFirst10miles;
              return count;
       }
       else if (miles <= 20) {
              const firstDenseAnimals = 10 * animalsFirst10miles;
              const restMiles = miles - 10;
              const secondDenseAnimals = restMiles * animalsSecond10miles;
              const totalAnimal = firstDenseAnimals + secondDenseAnimals;
              return totalAnimal;
       }
       else {
              const firstDenseAnimals = 10 * animalsFirst10miles;
              const secondDenseAnimals = 10 * animalsSecond10miles;
              const restMiles = miles - 20;
              const restDenseAnimals = restMiles * animalsRestMiles;
              const totalAnimal = firstDenseAnimals + secondDenseAnimals + restDenseAnimals;
              return totalAnimal;
       }
}
const animals = animalCount(32);
console.log(animals);