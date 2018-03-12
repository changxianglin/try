var log = console.log.bind(console)

function Person(name) {
    this.name = name
}

Person.prototype.sayName = function() {
    log(this.name)
}

var person1 = Person('Nicholas')

log(person1 instanceof Person)
log(typeof person1)
log(name)

