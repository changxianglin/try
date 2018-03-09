var log = console.log.bind(console)

var person1  = {}

Object.defineProperties(person1, {
    _name: {
        value: 'Nicholas',
        enumerable: true,
        configrable: true,
        writable: true
    },
    name: {
        get: function() {
            log('Reading name')
            return this._name
        },
        set: function(value) {
            log('Setting name tp %s', value)
            this._name = value
        },
        enumberable: true,
        configurable: true
    }
})

log('new')

var person1 = {
    name: 'Nicholas'
}

var descriptor = Object.getOwnPropertyDescriptor(person1, 'name')

log(descriptor.enumerable)
log(descriptor.configurable)
log(descriptor.writable)
log(descriptor.value)

log('extensible')

var pserson1 = {
    name: 'Nicholas'
}

log(Object.isExtensible(person1))
Object.preventExtensions(person1)
log(Object.isExtensible)
person1.sayName = function() {
    log(this.name)
}
log('sayName' in person1)

log('---')

var pserson1 = {
    name: 'Nicholas'
}

log(Object.isExtensible(person1), 59)
log(Object.isSealed(person1), 60)

Object.seal(person1)
log(Object.isExtensible(person1), 63)
log(Object.isSealed(person1), 64)

person1.sayName = function() {
    log(this.name)
}

log('sayName' in person1)

person1.name = 'Greg'
log(person1.name)

log('delete')
log('name' in person1)
log(person1.name)

var descriptor = Object.getOwnPropertyDescriptor(person1, 'name')
log(descriptor.configurable)