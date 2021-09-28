const Airport = require('./Airport');
const Plane = require('./Plane');
const Bag = require('./Bag');
const Person = require('./Person');

describe('Airport object', () => {
	test('airport has a name', () => {
		let airport1 = new Airport('Groovy');

		expect(typeof airport1.name).toBe('string');
	});

	test('airport has planes', () => {
		let airport0= new Airport("bluespace1")
		if(!airport0.planes){
			throw new Error("airport has no planes")
		}
	});

	test('airport can add planes', () => {
		let airport2 = new Airport('smooth');
		airport2.addPlane('smoove');
		expect(airport2.planes.length).toBe(1);
	});

	test('airport can have planes with passengers with bags', () => {
		const airportBase = new Airport("newbase1")
		const plane1 = new Plane('AirForce1')
		const person1= new Person('nick')
		const nickBag = new Bag(10)

		airportBase.addPlane(plane1)
		plane1.addPassenger(person1)
		person1.addBag(nickBag)

		expect(airportBase.planes.length).toBe(1)
		expect(plane1.passengers.length).toBe(1)
		expect(person1.bags.length).toBe(1)
	});
});
