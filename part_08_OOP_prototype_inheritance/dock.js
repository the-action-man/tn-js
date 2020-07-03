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

    /**
     * @param {Ship} ship
     * @param {string} color
     */
    this.recolorShip = function (ship, color) {
        ship.color = color;
    }

    /**
     * @param {Ship} ship
     */
    this.repairShip = function (ship) {
        if (!this.isShipInDock) {
            console.log('The ship is not in this dock');
            return false
        }

        if (ship instanceof this._shipClass) {
            return true;
        }

        console.log('The ship cannot be repaired by this dock');
        return false;
    }

    /**
     * @param {Ship} ship
     */
    this.isShipInDock = function (ship) {
        return ship.name in this.ships;
    }

    /**
     * @param {Ship} oldShip
     * @return {Ship} newShip
     */
    this.exchangeForANewShip = function (oldShip) {
        if (oldShip instanceof this._shipClass) {
            for (let ship of this.ships) {
                if (ship.isNewShip()) {
                    return ship;
                }
            }
            console.log('This dock does not have appropriate new ships');
            return null;
        }

        console.log('This ship cannot be exchange in this dock');
        return null;
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

/**
 *
 * @param {string} name
 * @param {number} xPosition
 * @param {number} yPosition
 * @constructor
 */
function SailingDock(name, xPosition, yPosition) {
    Dock.call(this, name, xPosition, yPosition);
    this._shipClass = MotorShip;

    this.buildSailingShip = (name, color, mastsQuantity, sailArea) => {
        const ship = new SailingShip(name, this._position.x, this._position.y,
            color, mastsQuantity, sailArea);
        this.ships[ship.name] = ship;
        return ship;
    }
}
SailingDock.prototype = new Dock();
