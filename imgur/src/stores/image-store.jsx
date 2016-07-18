var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = Reflux.createStore({
    listenables:[Actions],
    getImages: function(topicId){
        return Api.get('topics/'+ topicId)
            .then(function(json){
                this.images = json.data;
                this.triggerChange();
            }.bind(this));
    },
    triggerChange:function(){
        this.trigger('change', this.images);
    }
})
