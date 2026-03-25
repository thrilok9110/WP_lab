class Calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    add() {
        return this.a + this.b;
    }
}

let calc = new Calculator(10, 5);
console.log("Addition:", calc.add());