class Calculator {
    constructor(screenElement) {
        this.screenElement = screenElement;
        this.clear();
    }

    clear() {
        this.currentValue = '';
        this.previousValue = '';
        this.operation = undefined;
        this.updateScreen();
    }

    appendNumber(number) {
        if (number === '.' && this.currentValue.includes('.')) return;
        this.currentValue = this.currentValue.toString() + number.toString();
        this.updateScreen();
    }

    chooseOperation(operation) {
        if (this.currentValue === '') return;
        if (this.previousValue !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousValue = this.currentValue;
        this.currentValue = '';
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousValue);
        const current = parseFloat(this.currentValue);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                computation = prev / current;
                break;
            default:
                return;
        }
        this.currentValue = computation;
        this.operation = undefined;
        this.previousValue = '';
        this.updateScreen();
    }

    updateScreen() {
        this.screenElement.value = this.currentValue;
    }
}

const calculator = new Calculator(document.querySelector('#calculator-screen'));

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const { value } = button;
        switch (value) {
            case 'all-clear':
                calculator.clear();
                break;
            case '=':
                calculator.compute();
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                calculator.chooseOperation(value);
                break;
            default:
                calculator.appendNumber(value);
        }
    });
});
