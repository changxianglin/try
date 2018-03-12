var log = console.log.bind(console)

function Person(name) {
    var age = 25

    this.name = name

    this.getAge = function() {
        return age
    }

    this.growOlder = function() {
        age++
    }
}

var person = new Person('Nicholas')

log(person.name)
log(person.getAge())

person.age = 100
log(person.getAge())

person.growOlder()
log(person.getAge())