var log = console.log.bind(console)
var color1 = 'red'
var color2 = color1

log(color1)
log(color2)

color1 = 'blue'

log(color1)
log(color2)

log(typeof 'Nicholas')
log(typeof 10)
log(typeof 5.1)
log(typeof true)
log(typeof undefined)

// diffrence
log(typeof null)
// log(value === null)

var object = new Object()

var object1 = new Object()
var object2 = object1

var object = new Object()
obejct1 = null

var object1 = new Object()
var object2 = object1

object1.myCustomProperty = 'Awersome!'
log(object2.myCustomProperty)

var items = new Array()
var now = new Date()
var error = new Error('Something bad happened.')
var func = new Function('console.log("HI")')
var object = new Object()
var re = new RegExp("\\d+")

var items = []
var object = {}

function reflect(value) {
    return value
}

log(items instanceof Array)
log(object instanceof Object)
log(reflect instanceof Function)
log(object instanceof Array)

var items = []
log(Array.isArray(items))


var name = 'Nicholas'
var count = 10
var found = false

log(name instanceof String)
log(count instanceof Number)
log(found instanceof Boolean)

var name = new String('Nicholas')
var count = new Number(10)
var found = new Boolean(false)

log(typeof name)
log(typeof count)
log(typeof found)

log('Number', 'String', 'Boolean', 'Null', 'Undefined')
// typeof instanceof