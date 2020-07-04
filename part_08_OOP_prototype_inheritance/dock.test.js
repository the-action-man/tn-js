console.log("======== DOCK TEST =========");

describe('Dock', () => {
    it('#moor()', () => {
        const motorDock = new MotorDock("mDock_01", 0, 0);
        const motorShip = motorDock.buildMotorShip("mShip_01", "white", 11, "plastic");
        motorDock.moor(motorShip)
        assert.isTrue(motorShip.name in motorDock.ships)
    });

    it('#unmoor()', () => {
        const motorDock = new MotorDock("mDock_01", 0, 0);
        const motorShip = motorDock.buildMotorShip("mShip_01", "white", 11, "plastic");
        motorDock.moor(motorShip)
        motorDock.unmoor(motorShip)
        assert.isFalse(motorShip.name in motorDock.ships)
    });

    it('#exchangeForANewShip()', () => {
        const motorDock = new MotorDock("mDock_01", 0, 0);
        const motorShip = motorDock.buildMotorShip("mShip_01", "white", 11, "plastic");
        motorShip.moveTo(5, 5);
        motorShip.moveTo(motorDock.position().x, motorDock.position().y);
        motorDock.moor(motorShip);
        const motorShip2 = motorDock.buildMotorShip("mShip_02", "red", 12, "steel");
        motorDock.moor(motorShip2);
        const newShip = motorDock.exchangeForANewShip(motorShip);
        assert.isTrue(newShip === motorShip2);
    });
});


