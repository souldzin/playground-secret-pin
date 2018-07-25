class PinPad {
    constructor(initValue = '') {
        this._value = initValue;
    }

    press1() {
        return this._press(1);
    }

    press2() {
        return this._press(2);
    }

    press3() {
        return this._press(3);
    }

    press4() {
        return this._press(4);
    }

    press5() {
        return this._press(5);
    }

    press6() {
        return this._press(6);
    }

    press7() {
        return this._press(7);
    }

    press8() {
        return this._press(8);
    }

    press9() {
        return this._press(9);
    }

    _press(num) {
        this._value += num.toString();

        return this; // This is to allow special method chaining (i.e. press1().press3().press4())
    }

    getValue() {
        return this._value;
    }
}

module.exports = PinPad;
