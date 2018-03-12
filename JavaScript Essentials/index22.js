var log = console.log.bind(console)

var Person = (function() {
    var age = 25

    function InnerPerson(name) {
        this.name = name
    }

    InnerPerson.prototype.getAge = function() {
        return age
    }

    InnerPerson.prototype.growOlder = function() {
        age++
    }

    return InnerPerson
}())

var person1 = new Person('Nicholas')
var person2 = new Person('Greg')

log(person1.name)
log(person1.getAge())

log(person2.name)
log(person2.getAge())

person1.growOlder()
log(person1.getAge())
log(person2.getAge())


