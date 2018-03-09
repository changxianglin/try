var log = console.log.bind(console)

function Person(name) {
    this.name = name
    this.sayName = function() {
        console.log(this.name)
    }
}

var person1 = new Person('Nicholas')
var person2 = new Person('Greg')

log(person1.name)
log(person2.name)

person1.sayName()
person2.sayName()

log('---')

function Person(name) {
    Object.defineProperty(this, 'name', {
        get: function() {
            return name
        },
        set: function() {
            name = newName
        },
        enumerable: true,
        configruable: true
    })

    this.sayName = function() {
        log(this.name)
    }
}

var person1 = Person('Nicholas')

log(person1 instanceof Person)
log(typeof person1)
log(name)

log('2222')

var book = {
    title: 'The Principles of Object-Oriented JavaScript'
}

log('title' in book)
log(book.hasOwnProperty('title'))
log('hasOwnProperty' in book)
log(book.hasOwnProperty('hasOwnProperty'))
log(Object.prototype.hasOwnProperty('hasOwnProperty'))

log('333')

function hasPrototypeProperty(object, name) {
    return name in object || !object.hasOwnProperty(name)
}

log(hasPrototypeProperty(book, 'title'))
log(hasPrototypeProperty(book, 'hasOwnProperty'))

log('444')

var prototype = Object.getPrototypeOf(Object)
log(prototype === Object.prototype)

var object = {}
log(Object.prototype.isPrototypeOf(object))

var object = {}
log(Object.prototype.isPrototypeOf(object))

log('555')

var object = {}
log(object.toString())

object.toString = function() {
    return '[object Custom]'
}
log(object.toString())

delete object.toString
console.log(object.toString())

delete object.toString
log(object.toString())

log('666')

