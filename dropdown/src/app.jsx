var React = require('react');
var Dropdown = require('./dropdown');

var options = {
    title:'choose the option',
    items:[
            'FrontEnd',
            'backEnd',
            'design',
        ]
};
var element = React.createElement(Dropdown,options);
React.render(element,document.querySelector('.container'));
