var React = require('react');
var Reflux= require('reflux');
var ImageStore = require('../stores/image-store');
var Actions = require('../actions');
var ImagePreview = require('./image-preview');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
    mixins:[
        Reflux.listenTo(ImageStore,'onChange')
    ],
    getInitialState:function(){
        return {
            images:[]
        }
    },
    componentWillMount:function(){
        Actions.getImages(this.props.params.id);
    },
    componentWillReceiveProps:function(nextProps){
        console.log(121212);
        Actions.getImages(nextProps.params.id);
    },
    render:function(){
        return <div>
        {this.renderImages}
        </div>
    },
    renderImages:function(){
        return this.state.images.slice(0,20).map(function(image){
            return <ImagePreview key={this.key} {...image} />
        });
    },
    onChange:function(event,images){
        this.setState({
            images:images
        });
    }
});
