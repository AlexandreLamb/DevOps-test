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
        required: true
    },
    updateAt: {
        type: Date,
        require: true
    },
    authName: {
        type: String,
        required: true
    }
};

const options = {};

const subjectSchema = new Schema(attributes,options);

const subjectModel = model(name, subjectSchema);

module.exports = SubjectModel;