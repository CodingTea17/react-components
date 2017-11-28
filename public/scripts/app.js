"use strict";

// JSX - JavaScript XML
console.log("App.js is running");

var app = {};

var render = function render() {
  var template = React.createElement("div", null);
  ReactDOM.render(template, document.getElementById('app'));
};

render();
