
const readSubject = require('../routes/controllers/subect/Read');
const mongoose = require('mongoose');

const mockRequest = (body = {}) => ({
    body
});

const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};

describe('[Controllers > Todo] - Read', () => {
    describe('Normal call', () => {
        it('should return status 200', async () => {
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
            await readSubject(req, res);
            mongoose.connection.close();

            // Assert
            expect(res.status).toHaveBeenCalledWith(200);
        });
    });
});
