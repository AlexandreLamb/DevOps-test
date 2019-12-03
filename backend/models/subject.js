const { Schema, model } = require('mongoose');

const name = 'subject';

const attributes = {
    name: {
        type: String,
        required : true
    },
    link: {
        type: String,
        required: false
    },
    content: {
        type: String,
        required: false
    },
    createAt: {
        type: Date,
        required: false
    },
    updateAt: {
        type: Date,
        require: false
    },
    authName: {
        type: String,
        required: false
    }
};

const options = {};

const SubjectSchema = new Schema(attributes,options);

const SubjectModel = model(name, SubjectSchema);

module.exports = SubjectModel;