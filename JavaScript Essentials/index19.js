var log = console.log.bind(console)

var yourObject = (function() {
//    private data variables
    return {
    //    public methods and properties
    }
}())

var person = (function() {
    var age = 25

    return {
        name: 'Nicholas',

        getAge: function() {
            return age
        },

        growOlder: function() {
            age++
        }
    }
}())

log(person.name)
log(person.getAge())

person.age = 10
log(person.getAge())

person.growOlder()
log(person.getAge())

