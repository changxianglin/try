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
        return "[Person" + this.name + "]"
    }
}

var person1 = new Person('Nicholas')
var person2 = new Person('Greg')

log(person1 instanceof Person)
log(person1.constructor === Person)
log(person1.constructor === Object)

log('  ')
log(person2 instanceof Person)
log(person2.constructor === Person)
log(person2.constructor === Object)