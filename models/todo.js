const mongoose  = require('mongoose');

const todoSchema = new mongoose.Schema({
    task: { 
        type: String,
        required: true 
    },
    completed : {
        type: Boolean,
        default: false
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'newUser'
    }
});

module.exports = mongoose.model('Todo', todoSchema);
