var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');
var _ = require('lodash');

module.exports = Reflux.createStore({
    listenables:[Actions],
    getImages: function(topicId){
        return Api.get('topics/'+ topicId)
            .then(function(json){
                this.images = _.reject(json.data,function(image){
                    return image.is_album;
                });
                this.triggerChange();
            }.bind(this));
    },
    triggerChange:function(){
        this.trigger('change', this.images);
    }
})
