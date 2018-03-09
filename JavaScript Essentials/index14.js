var log = console.log.bind(console)

Object.prototype.add = function(value) {
    return this + value
}

var book = {
    title: 'The Principles of Object-Oriented JavaScript'
}

log(book.add(5))
log('title'.add('end'))

// in a web browser
// log(document.add(true))
// log(window.add(5))

var empty = {}

for(var property in empty) {
    log(property)
}

log('---')
var empty = {}

for(var property in empty) {
    if(empty.hasOwnProperty(property)) {
        log(property)
    }
}