'use strict';

/**
 * @typedef {Object} Dock
 * @property {string} name
 * @property {Object<string, Ship>} ships
 */

function Dock(name, xPosition, yPosition) {
    this.name = name;
    this._position = {x: xPosition, y: yPosition};
    this.ships = {};

    this.position = function () {
        console.log('position=', this._position);
        return this._position;
    };

    /**
     * @param {Ship} ship
     */
    this.moor = function (ship) {
        if (ship.position().x !== this._position.x
            || ship.position().y !== this._position.y) {
            throw new Error("The ship is not near the dock")
        }

        if (!ship.dropAnchor()) {
            throw new Error("Anchor cannot be dropped")
        }

        this.ships[ship["name"]] = ship;
    }

    /**
     * @param {Ship} ship
     */
    this.unmoor = function (ship) {
        if (!ship.name in this.ships) {
            throw new Error("Ship " + ship.name + " is not in this dock.");
        }
        ship.riseAnchor();
        delete this.ships[ship.name];
    }
}

/**
 *
 * @param {string} name
 * @param {number} xPosition
 * @param {number} yPosition
 * @constructor
 */
function MotorDock(name, xPosition, yPosition) {
    Dock.call(this, name, xPosition, yPosition);
    this._shipClass = MotorShip;

    this.buildMotorShip = (name, color, motorPower, hullMaterial) => {
        const ship = new MotorShip(name, this._position.x, this._position.y,
            color, motorPower, hullMaterial);
        this.ships[ship.name] = ship;
        return ship;
    }
}
MotorDock.prototype = new Dock();

// TODO SailingDock
// TODO SailingDock
// TODO SailingDock
// TODO SailingDock
