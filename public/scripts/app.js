'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
  // Gives the constructor to have a default name if one is not given
  function Person() {
    var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { name: 'Prof. X', age: 100 };

    _classCallCheck(this, Person);

    this.name = args.name;
    this.age = args.age;
  }

  _createClass(Person, [{
    key: 'getGreeting',
    value: function getGreeting() {
      return 'Hi. I am ' + this.name + '.';
    }
  }, {
    key: 'getDescription',
    value: function getDescription() {
      return this.name + ' is ' + this.age + ' years old.';
    }
  }]);

  return Person;
}();

var me = new Person({ name: 'Dawson Mortenson', age: 22 });
console.log(me);
console.log(me.getGreeting());
console.log(me.getDescription());

var x = new Person();
console.log(x);
