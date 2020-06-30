'use strict';

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
        if (!ship.dropAnchor()) {
            throw new Error("Anchor cannot be dropped")
        }

        this.ships[ship["name"]] = ship;
    }

    /**
     * @param {Ship} ship
     */
    this.unmoor = function (ship) {
        if (!ship["name"] in this.ships) {
            throw new Error("Ship " + ship[name] + " is not in this dock.");
        }
        ship.riseAnchor();
        this.ships[ship[name]] = undefined;
    }
}
