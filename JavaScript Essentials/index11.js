var log = console.log.bind(console)

function Person(name) {
    this.name = name
}

Person.prototype = {
    constructor: Person,

    sayName: function() {
        log(this.name)
    },

    toString: function() {
        return '[Person ' + this.name + ']'
    }
}

var person1 = new Person('Nicholas')
var person2 = new Person('Greg')

// error
log('sayHi' in person1)
log('sayHi' in person2)

// add new method
Person.prototype.sayHi = function() {
    log('Hi')
}

person1.sayHi()
person2.sayHi()

//

var person1 = new Person('Nicholas')
var person2 = new Person('Greg')

Object.freeze(person1)

Person.prototype.sayHi = function() {
    log('Hi--')
}

person1.sayHi()
person2.sayHi()
