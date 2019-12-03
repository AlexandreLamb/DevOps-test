
const mongoose = require('mongoose');
const {createSubject } = require('../routes/controllers/subect/Create');

const mockRequest = (   nameData = '', linkData = '', contentData = '', createAtData = '', updateAtData ='', authNameData ='' ) => ({
    body: { 
            name     : nameData,
            link    : linkData,
            content  : contentData,
            createAt : createAtData,
            updateAt : updateAtData,
            authName : authNameData 
        }
});

const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};

describe('[Controllers > Subject] - Create', () => {
    describe('Call with a good body', () => {
        it('should return status 200', async () => {
            // Arrange
            const name = 'name1';
            const link = 'localhost:3030/api/subject/read';
            const content = 'content1';
            const createAt = new Date();
            const updateAt = new Date();
            const authName = 'auth1';
            
            const mongoDbUri =  'mongodb://localhost:27017';
            const mongoDbDatabase = 'test';

            // Act
            await mongoose.connect(`${mongoDbUri}/${mongoDbDatabase}`, {
                useNewUrlParser: true
            });
            const req = mockRequest(name, link, content, createAt, updateAt, authName);
           
           const res = mockResponse();

            // Act
            await createSubject(req, res);
            mongoose.connection.close();

            // Assert
            expect(res.status).toHaveBeenCalledWith(200);
        });
    });
    describe('Call without body', () => {
        it('should return status 400', async () => {
            // Arrange
            const req = mockRequest();
            const res = mockResponse();
            const mongoDbUri =  'mongodb://localhost:27017';
            const mongoDbDatabase = 'test';

            // Act
            await mongoose.connect(`${mongoDbUri}/${mongoDbDatabase}`, {
                useNewUrlParser: true
            });
            // Act
            await createSubject(req, res);
            mongoose.connection.close();

            // Assert
            expect(res.status).toHaveBeenCalledWith(400);
        });
    });
    describe('Call with bad link in body', () => {
        it('should return status 400', async () => {
           // Arrange
           const name = 'name1';
           const link = 'https://mysite.c';
           const content = 'content1';
           const createAt = new Date();
           const updateAt = new Date();
           const authName = 'auth1';
           
           const mongoDbUri =  'mongodb://localhost:27017';
           const mongoDbDatabase = 'test';

           // Act
           await mongoose.connect(`${mongoDbUri}/${mongoDbDatabase}`, {
               useNewUrlParser: true
           });
           const req = mockRequest(name, link, content, createAt, updateAt, authName);
          
          const res = mockResponse();

           // Act
           await createSubject(req, res);
           mongoose.connection.close();

           // Assert
           expect(res.status).toHaveBeenCalledWith(400);
        });
    });
    describe('Call with bad date in body', () => {
        it('should return status 400', async () => {
           // Arrange
           const name = 'name1';
           const link = 'https://mysite.c';
           const content = 'content1';
           const createAt = "Wed Dec 3 2019 13:46:47 GMT+0100 (heure normale d’Europe centrale)";
           const updateAt = new Date();
           const authName = 'auth1';
           
           const mongoDbUri =  'mongodb://localhost:27017';
           const mongoDbDatabase = 'test';

           // Act
           await mongoose.connect(`${mongoDbUri}/${mongoDbDatabase}`, {
               useNewUrlParser: true
           });
           const req = mockRequest(name, link, content, createAt, updateAt, authName);
          
          const res = mockResponse();

           // Act
           await createSubject(req, res);
           mongoose.connection.close();

           // Assert
           expect(res.status).toHaveBeenCalledWith(400);
        });
    });
});
