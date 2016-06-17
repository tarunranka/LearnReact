var React = require('react');
var ListItem = require('./list-item');

module.exports = React.createClass({
    getInitialState : function(){
        return {
            initialItems : [
                 "Apples",
                 "Broccoli",
                 "Chicken",
                 "Duck",
                 "Eggs",
                 "Fish",
                 "Granola",
                 "Hash Browns"
            ],
            items:[],
        }
    },
    updateList: function(event){
        var updatedList = this.state.initialItems;
        updatedList =updatedList.filter(function(item){
        return item.toLowerCase().search(
            event.target.value.toLowerCase()) !== -1;
        });
        this.setState({items: updatedList});
    },
    componentWillMount: function(){
        this.setState({items: this.state.initialItems})
    },
    render : function() {
        return <div className = "filter-list">
                <input type="text" placeholder="search" onChange = {this.updateList} />
                <ListItem items = {this.state.items} />
                </div>
    }
});
