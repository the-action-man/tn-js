'use strict';

/**
 * @typedef {Object} Ship
 * @property {string} name
 * @property {string} model
 * @property {number} xPosition
 * @property {number} yPosition
 * @property {string} color
 */

function Ship(name, model, xPosition, yPosition, color) {
    let _isAnchorDropped = false;
    this.name = name;
    this.model = model;
    this._position = { x: xPosition, y: yPosition };
    this._distance = 0;
    this.speed = 0;
    this.color = color;

    /**
     * @param {string} direction (‘n’, ‘w’, ‘s’, ‘e’)
     */
    this.move = function (direction) {
        if (_isAnchorDropped) {
            console.error('You need to rise anchor');
            return false;
        }

        switch (direction) {
            case "n":
                console.info( 'Движение на север' );
                this._position["y"]++;
                break;
            case "w":
                console.info( 'Движение на запад' );
                this._position["x"]--;
                break;
            case "s":
                console.info( 'Движение на юг' );
                this._position["y"]--;
                break;
            case "e":
                console.info( 'Движение на восток' );
                this._position["x"]++;
                break;
            default:
                console.error( "Нет таких значений. direction может быть ‘n’, ‘w’, ‘s’, ‘e’" );
                return false;
        }

        this._distance++;
        return true;
    };

    /**
     * @param {number} x
     * @param {number} y
     */
    this.moveTo = function (x, y) {
        if (_isAnchorDropped) {
            console.error('You need to rise anchor');
            return false;
        }
        this._distance = this._distance + this._calcDistance(x, y);
        this._position = { x, y };
        return true;
    };

    /**
     * @param {number} newXPosition
     * @param {number} newYPosition
     * @return {number} distance for current movement
     */
    this._calcDistance = function (newXPosition, newYPosition) {
        const xDistance = Math.abs(newXPosition - this._position["x"]);
        const yDistance = Math.abs(newYPosition - this._position["y"]);
        return Math.sqrt((xDistance ** 2) + (yDistance ** 2));
    }

    this.position = function () {
        console.log('position=', this._position);
        return this._position;
    };

    this.distance = function () {
        console.log('distance=', this._distance);
        return this._distance;
    };

    this.isAnchorDropped = function () {
        console.log('isAnchorDropped', this);
        return _isAnchorDropped;
    };

    this.dropAnchor = () => {
        if (this.speed !== 0) {
            console.error('Speed must be 0');
            return false;
        }

        _isAnchorDropped = true;
        return true;
    };

    this.riseAnchor = () => {
        _isAnchorDropped = false;
        return true;
    };
}

/**
 * @param {string} name
 * @param {number} xPosition
 * @param {number} yPosition
 * @param {string} color
 * @param {number} motorPower
 * @param {string} hullMaterial
 * @constructor
 */
const MotorShip = function(name, xPosition, yPosition,
                           color, motorPower, hullMaterial) {
    Ship.call(this, name, "motor ship", xPosition, yPosition, color)
    this.motorPower = motorPower;
    this.hullMaterial = hullMaterial;
}
MotorShip.prototype = new Ship();

/**
 * @param {string} name
 * @param {number} xPosition
 * @param {number} yPosition
 * @param {string} color
 * @param {string} mastsQuantity
 * @param {number} sailArea
 * @constructor
 */
const SailingShip = function(name, xPosition, yPosition,
                             color, mastsQuantity, sailArea) {
    Ship.call(this, name, "sailing ship", xPosition, yPosition, color)
    this.mastsQuantity = mastsQuantity;
    this.sailArea = sailArea;
}
SailingShip.prototype = new Ship();
