var log = console.log.bind(console)

var person = (function() {
    var age = 25

    function ageAge() {
        return age
    }

    function growOlder() {
        age++
    }

    return{
        name: 'Nicholas',
        getAge: getAge,
        growOlder: growOlder,
    }
}())

