function calc(operation) {
        var num = Number(document.getElementById("firstNumber").value);
        var num2 = Number(document.getElementById("secondNumber").value);
        switch (operation) {
                case 'add': {
                        addition(num, num2);
                        break;
                }
                case 'sub': {
                        substract(num, num2);
                        break;
                }
                case 'mul': {
                        multiply(num, num2);
                        break;
                }
                case 'divide': {
                        divide(num, num2);
                        break;
                }
        }

}
function multiply(num1, num2) {

        document.getElementById("result").value = num1 * num2;
}

function divide(num1, num2) {

        document.getElementById("result").value = num1 / num2;
}
function addition(num1, num2) {

        document.getElementById("result").value = num1 + num2;
}
function substract(num1, num2) {

        document.getElementById("result").value = num1 - num2;
}
function change() {
        if ((document.getElementById("firstNumber").value.length) != 0 && (document.getElementById("secondNumber").value.length) != 0) {
                document.getElementById("ad").disabled = false;
                document.getElementById("su").disabled = false;
                document.getElementById("mu").disabled = false;
                document.getElementById("di").disabled = false;
        }
}