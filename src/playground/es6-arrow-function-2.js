// arguments is not longer bound

// const add = function(a, b) {
//     return a + b;
// };

// const getFullname = function(fname, lname) {
//     console.warn("arguments", arguments);
//     return fname + ' ' + lname;
// };

// const addArrow = (a, b) => {
//     console.warn("arguments", arguments);
//     return a + b;
// };


const user = {
    name: 'siavash ebrahimi',
    age: 26,
    cities: ["tehran", "lorestan", "kouhdasht"],
    printPlacesLived: function() {
        const newCities = this.cities.map((city) => {
            return city.toUpperCase();
        });
        newCities.forEach((city) => {
            console.warn(this.name + ' has lived in ' + city);
        });
    },
};


const multiplier = {
    numbers: [10, 15, 30, 41, 53],
    multiplyby: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyby);
    },
};

console.warn(multiplier.multiply());