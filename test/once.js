var assert = require('assert');
var sinon = require('sinon');
var dispatcher = require('../index');


describe('static-evently', function () {
    describe('#once', function () {
        it('should fire once', function () {
            var aCounter = sinon.spy();
            var bCounter = sinon.spy();
            dispatcher.once("a", aCounter);
            dispatcher.once("b", bCounter);
            dispatcher.trigger("a");
            dispatcher.trigger("a");
            dispatcher.trigger("b");
            dispatcher.trigger("b");
            dispatcher.trigger("b");
            dispatcher.trigger("a");
            dispatcher.trigger("a");
            assert(aCounter.calledOnce);
            assert(bCounter.calledOnce);
        });
    });
});



