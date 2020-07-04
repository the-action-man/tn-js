console.log("======== SHIP TEST =========");

describe('Ship', () => {
    it('#moveTo()', () => {
        const motorShip = new MotorShip("mShip_01", 0, 0, "white", 11, "plastic");
        motorShip.moveTo(11, 12);
        motorShip.position().x.should.equal(11);
        motorShip.position().y.should.equal(12);
    });

    it('#move()', () => {
        const motorShip = new MotorShip("mShip_01", 0, 0, "white", 11, "plastic");

        motorShip.move("n");
        motorShip.position().x.should.equal(0);
        motorShip.position().y.should.equal(1);

        motorShip.move("e");
        motorShip.position().x.should.equal(1);
        motorShip.position().y.should.equal(1);

        motorShip.move("s");
        motorShip.position().x.should.equal(1);
        motorShip.position().y.should.equal(0);

        motorShip.move("w");
        motorShip.position().x.should.equal(0);
        motorShip.position().y.should.equal(0);
    });
});


