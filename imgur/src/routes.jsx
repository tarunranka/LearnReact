var React = require('react');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router; // show content based on the url
var Route = ReactRouter.Route; // config the route
var Main = require('./components/main');
var Topic = require('./components/topic');
module.exports = (
    <Router>
        <Route path="/" component={Main}>
            <Route path="topics/:id" component={Topic} />
        </Route>
    </Router>
);
