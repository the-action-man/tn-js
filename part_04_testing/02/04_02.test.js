console.log("======== TEST =========");

describe('wordStat', () => {
    it('positive test #1', () => {
        const result = wordStat("a b");
        result[0]["word"].should.equal('a');
        result[0]["sum"].should.equal(97);
        result[1]["word"].should.equal('b');
        result[1]["sum"].should.equal(98);
    });
    it('positive test #2', () => {
        const result = wordStat("ad bd");
        result[0]["word"].should.equal('ad');
        result[0]["sum"].should.equal(197);
        result[1]["word"].should.equal('bd');
        result[1]["sum"].should.equal(198);
    });
    it('negative test #1 undefined string', () => {
        const result = wordStat(undefined);
        result[0]["word"].should.equal('');
        result[0]["sum"].should.equal(0);
    });
    it('negative test #2 string with space', () => {
        const result = wordStat(" ");
        result[0]["word"].should.equal('');
        result[0]["sum"].should.equal(0);
    });
});
