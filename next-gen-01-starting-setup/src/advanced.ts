// Using with constructor (not recommended for validation)
/*  
class User2 {
    constructor(private firstName: string, private lastName: string) {}

    get FullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

const zdenko = new User2('Zdenko', 'Prezime');
*/

// Using with setters & getters (recommended for validation)
class User2 {
    private _firstName: string = '';
    private _lastName: string = '';

    set firstName(name: string) {
        if (name.trim() === '') {
            throw new Error('Invalid first name');
        }
        this._firstName = name;
    }

    set lastName(surname: string) {
        if (surname.trim() === '') {
            throw new Error('Invalid last name');
        }
        this._lastName = surname;
    }

    get fullName() {
        return this._firstName + ' ' + this._lastName;
    }

    static eid = 'USER';

    static greet() {
        console.log('Hello!');
    }
}

console.log(User2.eid); // Accessing static property

const zdenko = new User2();
zdenko.firstName = 'Zdenko';
zdenko.lastName = 'Prezime';


console.log(zdenko.fullName);

class Employee extends User2 {
    constructor(public jobTitle: string) {
        super();
        // super.firstName = 'Default';
    }

    work() {
        return `${this.fullName} is working as a ${this.jobTitle}`;
    }
}