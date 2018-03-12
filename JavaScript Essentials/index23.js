var log = console.log.bind(console)

function mixin(receiver, supplier) {
    for(var propety in supplier) {
        if(supplier.hasOwnProperty(property)) {
            receiver[property] = supplier[property]
        }
    }

    return receiver
}

function EventTarget() {

}

EventTarget.prototype = {
    constructor: EventTarget,
    addListener: function(type, listenner) {
        if(!this.hasOwnProperty('_listeners')) {
            this._listeners = []
        }

        if(typeof this._listeners[type] == 'underfined') {
            this._listeners[type] = []
            this._listeners[type].push(listenner)
        }
    },
    fire: function(event) {
        if(!event.target) {
            event.target = this
        }

        if(!event.type) {
            throw new Error('Event object missing type property')
        }

        if(this._listeners && this._listeners[event.type] instanceof Array) {
            var listeners = this._listeners[event.type]
            for(var i = 0, len = listeners.length; i < len; i++) {
                listeners[i].call(this, event)
            }
        }
    },

    removeListenner: function(type, listener) {
        if(this._listeners&&this_listeners[type] instanceof  Array) {
            var listeners = this._listeners[type]
            for(var i = 0, len = listeners.length; i < len; i++) {
                if(listeners[i] === listeners) {
                    listeners.splice(i, 1)
                    break
                }
            }
        }
    }
}

var target = new EventTarget()
target.addListener('message', function(event) {
    log("Message is " + event.data)
})

target.fire({
    type: 'message',
    data: 'Hello world',
})

var person = new EventTarget()
person.name = 'Nicholas'
person.sayName = function() {
    log(this.name)
    this.fire({type: 'namesaid', name: name})
}

function Person(name) {
    this.name = name
}

Person.prototype = Object.create(EventTarget.prototype)
Person.prototype.constructor = Person

Person.prototype.sayName = function() {
    log(this.name)
    this.fire({type: "namesaid", name: name})
}

var person = new Person('Nicholas')

log(person instanceof Person)
log(person instanceof EventTarget)