function calculadoraSuma(op1, op2, op3) {
    resultado = op1 + op2 + op3;
    return resultado
}
function calculadoraSubs(op1, op2) {
    resultado = op1 - op2;
    return resultado
}
function calculadoraMult(op1, op2) {
    resultado = op1 * op2;
    return resultado
}
function calculadoraDiv(op1, op2) {
    resultado = op1 / op2;
    return resultado
}

module.exports = { calculadoraSuma, calculadoraSubs, calculadoraDiv, calculadoraMult } 