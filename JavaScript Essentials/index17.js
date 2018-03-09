var log = console.log.bind(console)

function Rectangle(length, width) {
    this.length = length
    this.width = width
}

Rectangle.prototype.getArea = function() {
    return this.length * this.width
}

Rectangle.prototype.toString = function() {
    return '[Rectangle ' + this.length + 'X' + this.width + ']'
}

function Square(size) {
    Rectangle.call(this, size, size)
}

Square.prototype = Object.create(Rectangle.prototype, {
    constructor: {
        configurable: true,
        enumerable: true,
        value: Square,
        writable: true
    }
})

Square.prototype.toString = function() {
    return '[Square ' + this.length + 'X' + this.width + ']'
}

var square = new Square(6)

log(square.length)
log(square.width)
log(square.getArea())
