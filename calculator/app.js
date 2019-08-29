// screen start

function getNumber(num) {
    var input_var = document.getElementById('input');
    switch (num) {
        case 1:
            input_var.value += 1;
            break;
        case 2:
            input_var.value += 2;
            break;
        case 3:
            input_var.value += 3;
            break;
        case 4:
            input_var.value += 4;
            break;
        case 5:
            input_var.value += 5;
            break;
        case 6:
            input_var.value += 6;
            break;
        case 7:
            input_var.value += 7;
            break;
        case 8:
            input_var.value += 8;
            break;
        case 9:
            input_var.value += 9;
            break;
        case 0:
            input_var.value += 0;
            break;
    }
}
// screen end

// clear screen starts
function clearAll() {
    document.getElementById('input').value = "";
    document.getElementById('answer').value = "";
}
// clear screen ends

// operand for mathematical operation start
function getOperand(operand) {
    var input_var = document.getElementById('input');
    switch (operand) {
        case '+':
            input_var.value += '+';
            break;
        case '-':
            input_var.value += '-';
            break;
        case '/':
            input_var.value += '/';
            break;
        case '*':
            input_var.value += '*';
            break;
        case '+/-':
            input_var.value += '-' + input_var.value;
            break;
    }
}
// operand for mathematical operation end

// backspace starts
function backSpace() {
    var input_var = document.getElementById('input');
    var x = input_var.value;
    if (x.length > 0) {
        x = x.substring(0, x.length - 1);
        input_var.value = x;
    }
}
// backSpace ends
// computation starts

function compute() {
    var input_var = document.getElementById('input');
    ans = Math.floor(+eval(input_var.value));
    document.getElementById('answer').value = ans;
}
// computation ends