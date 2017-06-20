//  闭包相关的事儿，作用域链，内存
var a = function(num1, num2) {
var b = num1 + num2
    var c = function() {
        var d = b + 1
        return d
    }
    return c()
}
a(1, 2)
