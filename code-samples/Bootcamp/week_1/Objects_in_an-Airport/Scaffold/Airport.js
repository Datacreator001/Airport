class Airport {
	constructor(name) {
		this.name = name
		this.planes = []//what would be the best datatype?
	}

	addPlane(plane) {
		this.planes.push(plane) //use an array me
	}
}

module.exports = Airport