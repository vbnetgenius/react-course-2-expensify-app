class Person {
    constructor(fullname = 'Anonymous', age = 0) {
        this.fullname = fullname;
        this.age = age;
    }

    getFullname() {
        return this.fullname;
    }

    getAge() {
        return this.age;
    }

    // Get firstname of person
    getFirstname() {
        return this.fullname.split(" ")[0];
    }

    // Get lastname of person
    getLastname() {
        return this.fullname.split(" ")[1];
    }

    // Display person details
    display() {
        let firstname = this.getFirstname();
        let lastname = this.getLastname();

        console.log(`First Name : ${firstname}`);
        console.log(`Last Name : ${lastname}`);
    }

    getDescription() {
        return `${this.getFullname()} is ${this.age} year(s) old`;
    }

}

class Student extends Person {
    constructor(fullname, age, major) {
        super(fullname, age);
        this.major = major;
    }
    
    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` , majored in ${this.major}`;
        }
        return description;
    }

}

class Traveler extends Student {
    constructor(fullname, age) {
        super(fullname, age);
    }
}

const me = new Student("siavash ebrahimi", 27, "Computer Science");
console.log(me.getDescription());