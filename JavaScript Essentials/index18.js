var log = console.log.bind(console)

function Rectangle(length, width) {
    this.length = length
    this.width = width
}

Rectangle.prototype.getArea = function() {
    return this.length * this.width
}

Rectangle.prototype.toString = function() {
    return "[Rectangle " + this.length  + 'X' + this.height + "]"
}

function Square(size) {
    Rectangle.call(this, size, size)
}

Square.prototype = Object.create(Rectangle.prototype, {
    constructor: {
        configurable: true,
        enumerable: true,
        value: Square,
        writable: true,
    }
})

Square.prototype.toString = function() {
    var text = Rectangle.prototype.toString.call(this)
    return text.replace('Recting ', 'Square')
}