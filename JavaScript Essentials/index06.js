var log = console.log.bind(console)

var person1 = {
    name: 'Nicholas'
}

log(Object.isExtensible(person1))
log(Object.isSealed(person1))
log(Object.isFrozen(person1))

log('freeze')

Object.freeze(person1)
log(Object.isExtensible(person1))
log(Object.isSealed(person1))
log(Object.isFrozen(person1))

person1.sayName = function() {
    log(this.name)
}

log('sayName' in person1)

person1.name = 'Greg'
log(person1.name)

delete person1.name
log('name' in person1)
log(person1.name)

var descriptor = Object.getOwnPropertyDescriptor(person1, 'name')
log(descriptor.configurable)
log(descriptor.writable)