
var expect = require('chai').expect;
var app = require('../app/app');


describe('getMessage', function () {
    'use strict';

    describe('When parameter is ok', function () {
        describe('and contains perfect number(s)', function () {
            it('should return object which contains biggest perfect number and a message', function () {

                expect(app.getMessage([1, 2, 3, 4, 5, 6])).to.eql({hasPerfectNumbers: true, biggest: 6,
                    message: 'Argument contains 1 perfect number(s) and the biggest one is 6'});

                expect(app.getMessage([100, 6, 496, 81])).to.eql({hasPerfectNumbers: true, biggest: 496,
                    message: 'Argument contains 2 perfect number(s) and the biggest one is 496'});

                expect(app.getMessage([496,8128, 6 ])).to.eql({hasPerfectNumbers: true, biggest: 8128,
                    message: 'Argument contains 3 perfect number(s) and the biggest one is 8128'});

            });
        });

        describe('and doesn\'t contain perfect numbers', function () {
            it('should return object which contains info about not finding perfect numbers', function () {

                expect(app.getMessage([1, 2, 3, 4, 5])).to.eql({hasPerfectNumbers: false, biggest: null,
                    message: 'Argument doesn\'t contain perfect numbers'});

                expect(app.getMessage([100, 200, 300, 400, 888])).to.eql({hasPerfectNumbers: false, biggest: null,
                    message: 'Argument doesn\'t contain perfect numbers'});

            });
        });
    });

    describe('When parameter is not ok', function () {
        it('should throw Error(\'Argument is wrong or not a number!\')', function(){

            expect(function(){app.getMessage([-1, 0, -10, -496]);}).to.throw('Argument is wrong or not a number!');
            expect(function(){app.getMessage([6, '496']);}).to.throw('Argument is wrong or not a number!');
            expect(function(){app.getMessage([5, 10, 15, '']);}).to.throw('Argument is wrong or not a number!');

            expect(function(){app.getMessage([0]);}).to.throw('Argument is wrong or not a number!');

        });
    });
});