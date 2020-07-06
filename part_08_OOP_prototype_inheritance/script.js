'use strict';

console.info("===--- Dock ---===");
console.info("=== Motor Dock ===");
const motorDock = new MotorDock("mDock_01", 0, 0);
const motorShip = motorDock.buildMotorShip("mShip_01", "white", 11, "plastic")
console.log(motorShip);

console.info("=== repair ===");
motorDock.repairShip(motorShip);


console.info("=== Sailing Dock ===");
const sailingDock = new SailingDock("mDock_01", 0, 0);
const sailingShip = sailingDock.buildSailingShip("sShip_01", "white", 11, 110)
console.log(sailingShip);
