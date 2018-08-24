class Apple {
    constructor(color) {
        this.color = color;
    }

    collect() {
        console.log('colected')
    }
}


function Apple(color) {
    this.color = color
}

Apple.prototype.colect = function () {
    console.log('colect')
}

const a = new Apple2('green')
const redDelicious = new Apple('red')

