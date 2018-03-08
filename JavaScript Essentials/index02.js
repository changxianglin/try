var log = console.log.bind(console)

function add(num1, num2) {
    return num1 + num2
}

var add = function(num1, num2) {
    return num1 + num2
}

var result = add(5, 5)

function add(num1, num2) {
    return num1 + num2
}

function sayHi() {
    console.log('Hi')
}

sayHi()

var sayHi2 = sayHi

sayHi2()

var sayHi = new Function("console.log(\"Hi!\")")

sayHi()

var sayHi2 = sayHi
sayHi2()


var numbers = [1, 5, 8, 7, 10, 2, 6]
numbers.sort(function(first, second) {
    return first - second
})

log(numbers)
numbers.sort()
log(numbers)

function reflect(value) {
    return value
}

log(reflect("Hi!"))
log(reflect("Hi!", 25))
log(reflect.length)

reflect = function() {
    return arguments[0]
}

log(reflect('Hi!!'))
log(reflect('Hi!!', 25))
log(reflect.length)

function sum() {
    var result = 0
    var i = 0
    var len = arguments.length

    while( i < len) {
        result += arguments[i]
        i++
    }
    return result
}

log(sum(1, 2))
log(sum(3, 4, 5, 6))
log(sum(50))
log(sum())

function sayMessage(message) {
    log(message)
}

function sayMessage() {
    log('Default message')
}

sayMessage('Hello!')

// use object to undestand

var sayMessage = new Function('message', 'console.log(message)')

sayMesage = new Function("console.log(\"Default message\")")

sayMessage('Hello!')

function sayMessage(message) {
    if(arguments.length === 0) {
        message = "Default message"
    }
    log(message)
}
sayMessage('Hello!')

var person = {
name: 'Nicholas',
sayName: function() {
console.log(person.name)
    }
}

person.sayName()

var person = {
    name: 'Nochals',
    sayName: function() {
        console.log(this.name)
    }
}

person.sayName()

function sayNameForAll() {
    console.log(this.name)
}

var person1 = {
    name: 'Nicholas',
    sayName: sayNameForAll
}

var person2 = {
    name: 'Greg',
    sayName: sayNameForAll
}

var name = 'Michael'

log('---')
person1.sayName()
person2.sayName()

sayNameForAll()

log('!!!')
function sayNameForAll(label) {
    console.log(label + ':' + this.name)
}

var person1 = {
    name: 'Nicholas'
}

var person2 = {
    name: 'Greg'
}

var name = 'Michael'

sayNameForAll.call(this, 'global')
sayNameForAll.call(person1, 'person1')
sayNameForAll.call(person2, 'person2')

log('111')

function sayNameForAll(label) {
    console.log(label + ':' + this.name)
}

var person1 = {
    name: 'Nicholas'
}

var person2 = {
    name: 'Greg'
}

var name = 'Michael'

sayNameForAll.apply(this, ['global'])
sayNameForAll.apply(person1, ['person1'])
sayNameForAll.apply(person2, ['person2'])


log('222')

function sayNameForAll(label) {
    console.log(label + ':' + this.name)
}

var person1 = {
    name: 'Nicholas'
}

var person2 = {
    name: 'Greg'
}

var sayNameForPerson1 = sayNameForAll.bind(person1)
sayNameForPerson1('person1')

var sayNameForPerson2 = sayNameForAll.bind(person2, 'Person2')
sayNameForPerson2()

person2.sayName = sayNameForPerson1
person2.sayName('person2')