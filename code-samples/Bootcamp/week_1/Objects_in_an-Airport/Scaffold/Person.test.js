const Bag = require('./Bag');
const Person = require('./Person');

describe('Person class', () => {
	test('Person has name', () => {
		let person0 = new Person('Nick','Pass01291','seatA3');

		expect(typeof person0.name).toBe('string');
	});

	test('Person has bag', () => {
        let person1 = new Person('Nick', 'Pass01291', 'seatA3');
        person1.addBag(1)
        expect(person1.bags.length).toBe(1)
    });
});
