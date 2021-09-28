class Person {
    constructor(name, bags, passportNumber,seatNumber) {
        this.name = name
        this.bags = []
        this.passportNumber= passportNumber
        this.seatNumber= seatNumber
    }

    addBag(bag){
this.bags.push(bag)
    }
}

module.exports = Person