var gpa = 0.00;

var display = document.querySelector('#value');
var btnDecrease = document.querySelector('.decrease');
var btnReset = document.querySelector('.reset');
var btnIncrease = document.querySelector('.increase');

btnIncrease.onclick = function() 
{
    if (gpa < 4.00) {
        gpa = gpa + 0.25;
    }
    updateDisplay();
};

btnDecrease.onclick = function() 
{
    if (gpa > 0.00) {
        gpa = gpa - 0.25;
    }
    updateDisplay();
};

btnReset.onclick = function()
 {
    gpa = 0.00;
    updateDisplay();
};

function updateDisplay()
 {
    display.textContent = gpa.toFixed(2);

    if (gpa >= 3.50) {
        display.style.color = "#017f8d";
    } else if (gpa >= 2.00 && gpa < 3.50) {
        display.style.color = "#f2c230";
    } else if (gpa > 0 && gpa < 2.00) {
        display.style.color = "#f21a05";
    } else {
        display.style.color = "#0d3141";
    }
}