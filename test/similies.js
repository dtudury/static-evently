var assert = require('assert');
var sinon = require('sinon');
var dispatcher = require('../index');


describe('static-evently #removeEventListener #addListener #stopListening #removeAllEventListeners #trigger #emit', function () {
    it('should allow method names from popular libraries', function () {
        var counter = sinon.spy();

        dispatcher.addListener("a", counter);
        dispatcher.trigger("a");
        assert(counter.calledOnce);
        dispatcher.removeListener("a", counter);
        dispatcher.trigger("a");
        assert(counter.calledOnce);

        dispatcher.addEventListener("a", counter);
        dispatcher.emit("a");
        assert.equal(counter.callCount, 2);
        dispatcher.removeEventListener("a", counter);
        dispatcher.emit("a");
        assert.equal(counter.callCount, 2);

        dispatcher.on("a", counter);
        dispatcher.dispatch("a");
        assert.equal(counter.callCount, 3);
        dispatcher.stopListening();
        dispatcher.dispatch("a");
        assert.equal(counter.callCount, 3);

        dispatcher.on("a", counter);
        dispatcher.dispatch("a");
        assert.equal(counter.callCount, 4);
        dispatcher.removeAllEventListeners();
        dispatcher.dispatch("a");
        assert.equal(counter.callCount, 4);
    });
});

