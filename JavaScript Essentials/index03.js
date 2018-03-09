var log = console.log.bind(console)

var person1 = {
    name: 'Nicholas',
    sayName: function() {
        console.log(this.name)
    }
}

log('sayName' in person1)

log('---')

var person1 = {
    name: 'Nicholas',
    sayName: function() {
        console.log(this.name)
    }
}

log('name' in person1)
log(person1.hasOwnProperty('name'))
log('toString' in person1)
log(person1.hasOwnProperty('toString'))
log('___')



