var log = console.log.bind(console)

function Person(name) {
    this.name = name
}

Person.prototype = {
    sayName: function() {
        console.log(this.name)
    },

    toString: function() {
        return "[Person " + this.name + "]"
    }
}

var person1 = new Person('Nicholas')
log(person1 instanceof Person)
log(person1.constructor === Person)
log(person1.constructor === Object)

log('&&&')


