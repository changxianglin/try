var log = console.log.bind(console)

var book = {
    title: 'The Principles of Object-Oriented JavaScript'
}

var book = Object.create(Object.prototype, {
    title: {
        configurable: true,
        enumerable: true,
        value: 'The Priciples of Object-Oriented JavaScript',
        writable: true
    }
})

var person1 = {
    name: 'Nicholas',
    sayName: function() {
        log(this.name)
    }
}

var person2 = Object.create(person1, {
    name: {
        configurabel: true,
        enumerable: true,
        value: 'Greg',
        writable: true
    }
})

person1.sayName()
person2.sayName()

log(person1.hasOwnProperty('sayName'))
log(person1.isPrototypeOf(person2))
log(person2.hasOwnProperty('sayName'))

log('{{{')

var nakedObject = Object.create(null)

log('toString' in nakedObject)
log('valueOf' in nakedObject)

var testObject = {}

log('toString' in testObject)
log('valueOf' in testObject)

