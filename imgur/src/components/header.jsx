var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var TopicStore = require('../stores/topic-store');
var Action = require('../actions');
var Link = Router.Link;

module.exports = React.createClass({
  mixins:[
    Reflux.listenTo(TopicStore,"onChange")
    ],
 getInitialState: function(){
    return {
        topics:[]
    }
 },
 componentWillMount: function(){
    Action.getTopics();
 },
  render: function() {
    return <nav className="navbar navbar-default">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand">Brand</Link>
             <ul className="nav navbar-nav navbar-right">
                {this.renderTopics()}
             </ul>
        </div>
    </nav>
  },
  renderTopics: function(){
    this.state.topics.map(function(topic){
        return <li key={topic.id}>
            <Link to= {"topics/" + topic.id}>
                {topic.name}
            </Link>
        </li>
    });
  },
  onChange:function(event,topics){
      this.setState({
          topics:topics
      });
  },
});
