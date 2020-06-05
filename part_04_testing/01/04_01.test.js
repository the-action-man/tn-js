console.log("======== TEST =========");

describe('sumOfPositive', () => {
    it('Success sum of positive integer numbers', () => {
        const result = sumOfPositive([10, 20]);
        assert.equal(result.count, 2);
        assert.equal(result.sum, 30);
    });
    it('Success sum of positive integer and decimal numbers', () => {
        const result = sumOfPositive([20, 10, 1.1, 10, 20]);
        assert.equal(result.count, 5);
        assert.equal(result.sum, 61.1);
    });
    it('Correct sum of negative integer numbers', () => {
        const result = sumOfPositive([-20, -10, -1]);
        assert.equal(result.count, 0);
        assert.equal(result.sum, 0);
    });
    it('Correct sum of negative integer and decimal numbers', () => {
        const result = sumOfPositive([-10, -11, -11.1]);
        assert.equal(result.count, 0);
        assert.equal(result.sum, 0);
    });
    it('Correct sum of negative boundary values', () => {
        const result = sumOfPositive([-1, -0.1, 0]);
        assert.equal(result.count, 0);
        assert.equal(result.sum, 0);
    });
    it('Correct sum of positive boundary values', () => {
        const result = sumOfPositive([1, 0.1, 0]);
        assert.equal(result.count, 2);
        assert.equal(result.sum, 1.1);
    });
});
