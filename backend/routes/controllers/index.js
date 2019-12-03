const {createSubject} = require('./subect/Create')


module.exports = {
    // Subject Handlers
    CreateSubject: createSubject,
    ReadSubject: require('./subect/Read')

};