var React = require('react');
var ReactDOM = require('react-dom');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var Header = require('./header');
var rootUrl = 'https://blazing-heat-1568.firebaseio.com/';


var Menu = React.createClass({
  render: function(){
    var menus = ['Home',
      'About',
      'Services',
      'Portfolio',
      'Contact us']
    return React.createElement('div',
      null,
      menus.map(function(v,i){
        return React.createElement('div',
          {key: i},
          React.createElement(Link, {label: v})
        )
      })
    )
}})

var Link = React.createClass({
  render: function () {
    var url='/'
      + this.props.label
        .toLowerCase()
        .trim()
        .replace(' ', '-')
    return React.createElement('div',
      null,
      React.createElement(
        'a',
        {href: url},
        this.props.label
      ),
      React.createElement('br')
      )
  }
})

ReactDOM.render(
  React.createElement(
    Menu,
    null
  ),
  document.getElementById('menu')
)
