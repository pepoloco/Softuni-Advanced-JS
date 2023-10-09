function calculator() {

    let object = {};
    function init(selector1, selector2, resultSelector) {
        object = {
            selector1,
            selector2,
            resultSelector
        };
    }

    function add() {
        const num1 = parseFloat(document.querySelector(object.selector1).value)
        const num2 = parseFloat(document.querySelector(object.selector2).value)
        let result = num1 + num2;
        document.querySelector(object.resultSelector).value = result

    }
    function subtract() {
        const num1 = parseFloat(document.querySelector(object.selector1).value)
        const num2 = parseFloat(document.querySelector(object.selector2).value)
        let result = num1 - num2;
        document.querySelector(object.resultSelector).value = result
    }
    return {
        init, add, subtract
    }
}
const calculate = calculator();
calculate.init('#num1', '#num2', '#result');
