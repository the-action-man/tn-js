console.log("======== TEST =========");

describe('sumOfPositive', () => {
    it('positive test #1', () => {
        const result = sumOfPositive([10, 20]);
        assert.equal(result.count, 2);
        assert.equal(result.sum, 30);
    });
    it('positive test #2', () => {
        const result = sumOfPositive([20, 10, 1.1, 10, 20]);
        assert.equal(result.count, 5);
        assert.equal(result.sum, 61.1);
    });
    it('negative test #1', () => {
        const result = sumOfPositive([-20, -10, -1.1]);
        assert.equal(result.count, 0);
        assert.equal(result.sum, 0);
    });
    it('negative test #2', () => {
        const result = sumOfPositive([-10, -11, -11.1]);
        assert.equal(result.count, 0);
        assert.equal(result.sum, 0);
    });
    it('boundary values test #1', () => {
        const result = sumOfPositive([-1, -0.1, 0]);
        assert.equal(result.count, 0);
        assert.equal(result.sum, 0);
    });
    it('boundary values test #2', () => {
        const result = sumOfPositive([1, 0.1, 0]);
        assert.equal(result.count, 2);
        assert.equal(result.sum, 1.1);
    });
});
