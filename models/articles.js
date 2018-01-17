const mongoose = require('mongoose');

var articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        validate: [
            function(value) {
                return value.length<=120
            },
            'Title is too long (120 is max)'
        ],
        default: 'New Post'
    },
    text: String,
    published: {
        type: Boolean,
        default: false
    },
    slug: {
        type: String,
        set: function(value) {
            return value.toLowerCase().replase(' ', '-')
        }
    }
});
articleSchema.static({
    list: function(callback){
        this.find({}, null, {sort: {_id:-1}}, callback);
    }
})
module.exports = mongoose.model('Article', articleSchema);
