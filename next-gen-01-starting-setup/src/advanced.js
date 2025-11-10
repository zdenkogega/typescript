var User2 = /** @class */ (function () {
    function User2(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Object.defineProperty(User2.prototype, "FullName", {
        get: function () {
            return this.firstName + ' ' + this.lastName;
        },
        enumerable: false,
        configurable: true
    });
    return User2;
}());
var zdenko = new User2('Zdenko', 'Prezime');
console.log(zdenko.FullName);
