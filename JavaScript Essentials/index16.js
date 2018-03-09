var log = console.log.bind(console)

function YourConstructor() {

}

YourConstructor.prototype = Object.create(Object.prototype, {
    constructor: {
        configurable: true,
        enumerable: true,
        value: YourConstructor,
        writable: true
    }
})

function Reactangle(length, width) {
    this.length = length
    this.width = width
}

Reactangle.prototype.getArea = function() {
    return this.length * this.width
}

Reactangle.prototype.toString = function() {
    return '[Reactangle ' + this.length + 'X' + this.width + ']'
}

function Square(size) {
    this.length = size
    this.width = size
}

Square.prototype = new Reactangle()
Square.prototype.constructor = Square

Square.prototype.toString = function() {
    return '[Square ' + this.length + 'X' + this.width + ']'
}

var rect = new Reactangle(5, 10)
var square = new Square(6)

log(rect.getArea())
log(square.getArea())
log(rect.toString())
log(square.toString())
log(rect instanceof Reactangle)
log(rect instanceof Object)
log(square instanceof Square)
log(square instanceof Reactangle)
log(square instanceof Object)

