console.log("======== TEST =========");

describe('wordStat', () => {
    it('Success calculation for one-symbols words', () => {
        const result = wordStat("a b");
        result.length.should.equal(2)
        result[0]["word"].should.equal('a');
        result[0]["sum"].should.equal(97);
        result[1]["word"].should.equal('b');
        result[1]["sum"].should.equal(98);
    });
    it('Success calculation for multi-symbols words', () => {
        const result = wordStat("ad bd");
        result.length.should.equal(2)
        result[0]["word"].should.equal('ad');
        result[0]["sum"].should.equal(197);
        result[1]["word"].should.equal('bd');
        result[1]["sum"].should.equal(198);
    });
    it('Success calculation for multi-spaces text', () => {
        const result = wordStat("a     b");
        result.length.should.equal(2)
        result[0]["word"].should.equal('a');
        result[0]["sum"].should.equal(97);
        result[1]["word"].should.equal('b');
        result[1]["sum"].should.equal(98);
    });
    it('Correct result for empty string', () => {
        const result = wordStat("");
        result.length.should.equal(1)
        result[0]["word"].should.equal('');
        result[0]["sum"].should.equal(0);
    });
    it('Correct result for string with space', () => {
        const result = wordStat(" ");
        result.length.should.equal(1)
        result[0]["word"].should.equal('');
        result[0]["sum"].should.equal(0);
    });
});
