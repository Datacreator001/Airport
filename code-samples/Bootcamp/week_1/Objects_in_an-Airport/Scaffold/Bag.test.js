const Bag = require('./Bag');

describe('Bag class', () => {
	
	test('bag has weight', () => {
		const bag = new Bag(1);
		expect(bag.weight).toBe(1);
	});
	//if bag has no weight, return error
	test('bag has no weight to return an error', () => {
        
        expect(() => new Bag()).toThrowError('bag must have weight');
    });
});
