const display = document.getElementById('display');

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let result = eval(display.value.replace('^', '**'));
    display.value = result;
  } catch {
    display.value = 'Error';
  }
}

function sqrt() {
  try {
    display.value = Math.sqrt(eval(display.value));
  } catch {
    display.value = 'Error';
  }
}

function power() {
  display.value += '^';
}

// Handle keyboard input
document.addEventListener('keydown', function (event) {
  const key = event.key;
  if (/[0-9+\-*/.%]/.test(key)) {
    append(key);
  } else if (key === 'Enter') {
    event.preventDefault();
    calculate();
  } else if (key === 'Backspace') {
    backspace();
  } else if (key === 'Escape') {
    clearDisplay();
  }
});
