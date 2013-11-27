module.exports = {
    off: off, removeListener: off, removeEventListener: off,
    on: on, addListener: on, addEventListener: on,
    once: once,
    stop: stop, stopListening: stop, removeAllEventListeners: stop,
    dispatch: dispatch, trigger: dispatch, emit: dispatch
};


var _maps = {};


function off(id, f) {
    var map, index;
    if ((map = _maps[id]) && ~(index = map.indexOf(f)))
        map.splice(index, 1);
}


function on(id, f) {
    off(id, f);
    (_maps[id] || (_maps[id] = [])).push(f);
}


function once(id, f) {
    this.on(id, function wrapped(event) {
        off(id, wrapped);
        f(event);
    });
}


function stop(id) {
    if (id)
        delete _maps[id];
    else
        _maps = {};
}


function dispatch(id, event) {
    var map;
    if (map = _maps[id])
        map.forEach(function (f) {
            f(event);
        });
}