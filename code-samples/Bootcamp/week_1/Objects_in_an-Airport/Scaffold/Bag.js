class Bag {
    constructor(weight) {
        if(!weight||weight<0){
            throw new Error('bag must have weight')
        } 
        this.weight = weight
    }
}

module.exports = Bag