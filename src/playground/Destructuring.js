const person = {
    firstName: undefined,
    lastName: 'ebrahimi',
    age: 27,
    location: {
        city: 'Kouhdasht',
        temp: 92,
    },
};

const book = {
    title: 'Ego is the enemy',
    author: 'Siavash Ebrahimi',
    publisher: {
        name: 'NaghoosPress',
    },
};

const { name: publisherName='self-publish' } = book.publisher;

const address = ["Iran", "Lorestan", "Kouhdasht", "Seyedolshohada St."];
const [, , city, street] = address;

console.warn("Country:", country);
console.warn("State:", state);