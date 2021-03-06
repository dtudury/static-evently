var assert = require('assert');
var sinon = require('sinon');
var dispatcher = require('../index');


describe('static-evently', function () {
    describe('#stop', function () {
        it('should stop events firing', function () {
            var aCounter = sinon.spy();
            var bCounter = sinon.spy();
            dispatcher.on("a", aCounter);
            dispatcher.on("b", bCounter);
            dispatcher.trigger("a");
            dispatcher.trigger("a");
            dispatcher.trigger("b");
            dispatcher.stop("a");
            dispatcher.trigger("b");
            dispatcher.trigger("b");
            dispatcher.trigger("a");
            dispatcher.trigger("a");
            assert.equal(aCounter.callCount, 2);
            assert.equal(bCounter.callCount, 3);
        });
    });
});



