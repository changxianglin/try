var log = console.log.bind(console)

var book = {
    title: 'The Principle of Object-Oriented JavaScript'
}

var prototype = Object.getPrototypeOf(book)
log(prototype === Object.prototype)

var now = new Date()
var earlier = new Date(2018, 1, 3)
log(now > earlier)

var book = {
    title: 'The Priciple of Object-Oriented JavaScript'
}

var message =  'Book = ' + book
log(message)

// change toString
var book = {
    title: 'The Principles of Object-Oriented JavaScript',

    toString: function() {
        return '[Book ' + this.title + ']'
    }
}

var message = 'Book = ' + book
log(message)

