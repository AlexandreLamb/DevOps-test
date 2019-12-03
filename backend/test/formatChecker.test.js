const {isDate,isLink } = require('../core/helpers/formatChecker')

describe('[CASE-0] - isDate ', () => {
    it('should return true', () => {
        // Arrange
        const param = new Date();
        // Act
        const result = isDate(param);
        // Assert
        expect(result).toBe(true);
    });
});
describe('[CASE-1] - isDate ', () => {
    it('should return false', () => {
        // Arrange
        const param = "Wed Dec  2019 13:46:47 GMT+0100 (heure normale d’Europe centrale)";
        // Act
        const result = isDate(param);
        // Assert
        expect(result).toBe(false);
    });
});
describe('[CASE-2] - isDate ', () => {
    it('should return false', () => {
        // Arrange
        const param = new Date();
        param.setFullYear(param.getFullYear()+1);
        // Act
        const result = isDate(param);
        // Assert
        expect(result).toBe(false);
    });
});
describe('[CASE-3] - isDate ', () => {
    it('should return false', () => {
        // Arrange
        const param = new Date();
        param.setMonth(param.getMonth()+1);
        // Act
        const result = isDate(param);
        // Assert
        expect(result).toBe(false);
    });
});
describe('[CASE-4] - isDate ', () => {
    it('should return false', () => {
        // Arrange
        const param = new Date();
        param.setDate(param.getDate()+1);
        // Act
        const result = isDate(param);
        // Assert
        expect(result).toBe(false);
    });
});
describe('[CASE-5] - isDate ', () => {
    it('should return false', () => {
        // Arrange
        const param = new Date();
        param.setFullYear(param.getFullYear-1);
        // Act
        const result = isDate(param);
        // Assert
        expect(result).toBe(false);
    });
});
describe('[CASE-6] - isDate ', () => {
    it('should return false', () => {
        // Arrange
        const param = new Date();
        param.setMonth(param.getMonth()-1);
        // Act
        const result = isDate(param);
        // Assert
        expect(result).toBe(false);
    });
});
describe('[CASE-7] - isDate ', () => {
    it('should return false', () => {
        // Arrange
        const param = new Date();
        param.setDate(param.getDate()-1);
        // Act
        const result = isDate(param);
        // Assert
        expect(result).toBe(true);
    });
});
describe('[CASE-8] - isLink ', () => {
    it('should return true', () => {
        // Arrange
        const param = "http://localhost:3030/api/subject/read";
        // Act
        const result = isLink(param);
        // Assert
        expect(result).toBe(true);
    });
});
describe('[CASE-9] - isLink ', () => {
    it('should return false', () => {
        // Arrange
        const param = "htp://localhost:3030/api/subject/read";
        // Act
        const result = isLink(param);
        // Assert
        expect(result).toBe(false);
    });
});
describe('[CASE-10] - isLink ', () => {
    it('should return true', () => {
        // Arrange
        const param = "localhost:3030/api/subject/read";
        // Act
        const result = isLink(param);
        // Assert
        expect(result).toBe(true);
    });
});
describe('[CASE-11] - isLink ', () => {
    it('should return true', () => {
        // Arrange
        const param = "https://mysite.com";
        // Act
        const result = isLink(param);
        // Assert
        expect(result).toBe(true);
    });
});
describe('[CASE-12] - isLink ', () => {
    it('should return false', () => {
        // Arrange
        const param = "https://mysite.c";
        // Act
        const result = isLink(param);
        // Assert
        expect(result).toBe(true);
    });
});