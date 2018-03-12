var log = console.log.bind(console)

function Person(name) {
    if(this instanceof Person) {

    } else {

    }
}

function Person(name) {
    if(this instanceof  Person) {
        this.name = name
    } else {
        return new Person(name)
    }
}

var person1 = new Person('Nicholas')
var person2 = Person('Nichiolas')
log(person1 instanceof Person)
log(person2 instanceof Person)