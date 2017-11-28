'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
  // Gives the constructor to have a default name if one is not given
  function Person() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === undefined ? 'Prof. X' : _ref$name,
        _ref$age = _ref.age,
        age = _ref$age === undefined ? 100 : _ref$age;

    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  _createClass(Person, [{
    key: 'getGreeting',
    value: function getGreeting() {
      return 'Hi. I am ' + this.name + '.';
    }
  }, {
    key: 'getDescription',
    value: function getDescription() {
      return 'I am ' + this.name + ', I am ' + this.age + ' years old.';
    }
  }]);

  return Person;
}();

// Creates a subclass of Person


var Student = function (_Person) {
  _inherits(Student, _Person);

  function Student() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref2$name = _ref2.name,
        name = _ref2$name === undefined ? 'Prof. X' : _ref2$name,
        _ref2$age = _ref2.age,
        age = _ref2$age === undefined ? 100 : _ref2$age,
        _ref2$major = _ref2.major,
        major = _ref2$major === undefined ? 'Undecided' : _ref2$major;

    _classCallCheck(this, Student);

    var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this));

    _this.major = major ? major : "Undecided";
    return _this;
  }

  _createClass(Student, [{
    key: 'hasMajor',
    value: function hasMajor() {
      return this.major != "Undecided" ? true : false;
    }
  }, {
    key: 'getDescription',
    value: function getDescription() {
      var description = _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), 'getDescription', this).call(this);
      if (this.hasMajor()) {
        description += ' I am major is ' + this.major + '.';
      }
      return description;
    }
  }]);

  return Student;
}(Person);

// Creates a subclass of Person


var Traveler = function (_Person2) {
  _inherits(Traveler, _Person2);

  function Traveler() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref3$name = _ref3.name,
        name = _ref3$name === undefined ? 'Prof. X' : _ref3$name,
        _ref3$age = _ref3.age,
        age = _ref3$age === undefined ? 100 : _ref3$age,
        _ref3$homeLocation = _ref3.homeLocation,
        homeLocation = _ref3$homeLocation === undefined ? 'Undisclosed' : _ref3$homeLocation;

    _classCallCheck(this, Traveler);

    var _this2 = _possibleConstructorReturn(this, (Traveler.__proto__ || Object.getPrototypeOf(Traveler)).call(this));

    _this2.homeLocation = homeLocation;
    return _this2;
  }

  _createClass(Traveler, [{
    key: 'hasHomeLocation',
    value: function hasHomeLocation() {
      return this.homeLocation != 'Undisclosed' ? true : false;
    }
  }, {
    key: 'getDescription',
    value: function getDescription() {
      var description = _get(Traveler.prototype.__proto__ || Object.getPrototypeOf(Traveler.prototype), 'getDescription', this).call(this);
      if (this.hasHomeLocation()) {
        description += ' I am are visting from ' + this.homeLocation + '.';
      }
      return description;
    }
  }]);

  return Traveler;
}(Person);

// A Person instance


var x = new Person();
console.log(x);

// const me = new Student({name: 'Dawson Mortenson', age: 22, major: 'Web Development'});
var me = new Traveler({ name: 'Dawson Mortenson', age: 22, homeLocation: 'Portland' });
console.log(me);
console.log(me.getDescription());
