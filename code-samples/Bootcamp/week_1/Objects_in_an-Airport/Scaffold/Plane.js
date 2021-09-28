const Person = require('./Person');

class Plane {
	constructor(name) {
		this.name = name;
		this.passengers = [];
	}

	setOrigin(origin) {
		this.origin = origin;
	}

	setDestination(destination) {
		this.destination = destination;
	}

	addPassenger(passenger) {
		this.passengers.push(passenger);
		return this.passengers;
	}
}

const plane = new Plane('Blue jet', 'tokoyo', 'cappa1');
plane.addPassenger('nick');
plane.addPassenger('cool');

console.log(plane);

module.exports = Plane;
