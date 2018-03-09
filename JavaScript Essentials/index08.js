var log = console.log.bind(console)

function Person(name) {
    this.name = name
}

Person.prototype.sayName = function() {
    console.log(this.name)
}

var person1 = new Person('Nicholas')
var person2 = new Person('Greg')

log(person1.name)
log(person2.name)

person1.sayName()
person2.sayName()

log('222')

function Person(name) {
    this.name = name
}

Person.prototype.sayName = function() {
    log(this.name)
}

Person.prototype.favorites = []

var person1 = new Person('Nicholas')
var person2 = new Person('Greg')

person1.favorites.push('pizza')
person2.favorites.push('quinoa')

log(person1.favorites)
log(person2.favorites)

