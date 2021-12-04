function gramsCalculator(kilos) {
    return kilos * 0.03
}

function calculateFungi() {
    const input = document.getElementById("CalculatorInput");
    const value = input.value;

    const grams = gramsCalculator(value)
    document.getElementById("calculatorValue").innerHTML = grams.toFixed(2) + " gm"
}