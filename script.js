const input = document.getElementById("numberInput");
const button = document.getElementById("checkBtn");
const result = document.getElementById("result");

button.addEventListener("click", () => {
  const num = parseInt(input.value);
  let isPrime = true;

  if (isNaN(num) || num <= 1) {
    isPrime = false;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
  }

  if (input.value === "") {
    result.textContent = "❌ Please enter a number!";
  } else {
    result.textContent = isPrime
      ? `✅ ${num} is a prime number`
      : `❌ ${num} is not a prime number`;
  }

  input.value = ""; // clear input after checking
});
