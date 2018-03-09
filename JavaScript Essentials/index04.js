var log = console.log.bind(console)

var person1 = {
    name: 'Nicholas'
}

log('name' in person1)

delete  person1.name
log('name' in person1)
log(person1.name)

var property

for(perperty in Object) {
    log('Name: ' + property )
    log('Value: ' + object[property])
}

log('111')

var properties = Object.keys(Object)

for(var i = 0, len = properties.length; i < len; i++) {
    log('Name: ' + properties[i])
    log('Value: ' + object[properties[i]])
}

log('222')
var person1 = {
    name: 'Nicholas'
}

log('name' in person1)
log(person1.propertyIsEnumerable('name'))

var properties = Object.keys(person1)
log('length' in properties)
log(properties.propertyIsEnumerable('length'))

log('333')

var person1 = {
    _name: 'Nicholas',

    get name() {
        log('Reading name')
        return this._name
    },

    set name(value) {
        log('Setting name to %s', value)
        this._name = value
    }
}

log(person1.name)

log('---')
person1.name = 'Greg'
log('|||')
log(person1.name)


log(']]]')

var person1 = {
    name: 'Nicholas'
}

Object.defineProperty(person1, 'name', {
    enumerable: false
})

log('name' in person1)
log(person1.propertyIsEnumerable('name'))

log('iii')
var properties = Object.keys(person1)
log(properties.length)

log('UUU')
Object.defineProperty(person1, 'name', {
    configurable: false
})

delete person1.name
log('name' in person1)
log(person1.name)

// 后面的会产生错误 defineProperty 已经设置不能配置。
// Object.defineProperty(person1, 'name', {
//     configurable: true
// })

log('ffff')
var perosn1 = {
    name: 'Nicholas'
}

var person1 = {}

Object.defineProperty(person1, 'name', {
    value: 'Nicholas',
    enumerbale: true,
    configurable: true,
    writable: true
})

var person1 = {}

Object.defineProperty(person1, 'name', {
    value: 'Nicholas'
})

log('name' in person1)
log(person1.propertyIsEnumerable('name'))

delete person1.name
log('name' in person1)

person1.name = 'Greg'
// 已经被锁定， 无法更改。
log(person1.name)

var person1 = {
    _name: 'Nicholas',

    get name() {
        log('Reading name')
        return this._name
    },

    set name(value) {
        console.log('Setting name to %s', value)
        this._name = value
    }
}

var person1 = {
    _name: 'Nicholas'
}

Object.defineProperty(person1, 'name', {
    get: function () {
        log('Reading name')
        return this._name
    },

    set: function(value) {
        log('Setting name to %s', value)
        this._name = value
    },
    enumerable: true,
    configurable: true
})

log('www')

var person1 = {
    _name: 'Nicholas'
}

Object.defineProperty(person1, 'name', {
    get: function() {
        log('Reading name')
        return this._name
    }
})

log('name' in person1)
log(person1.propertyIsEnumerable('name'))

delete person1.name
console.log('name' in person1)

log('(((')

log(person1.name = 'Greg')
log('333')
log(person1.name)