function cleanPhone(phone) {
  let digits = "";

  for (let i = 0; i < phone.length; i++) {
    if (phone[i] >= "0" && phone[i] <= "9") {
      digits = digits + phone[i];
    }
  }

  if (digits.length === 12 && digits.slice(0, 3) === "380") {
    digits = digits.slice(2);
  }

  if (digits.length === 10 && digits[0] === "0") {
    return digits;
  }

  return null;
}

function formattedPhone(phone) {
  const digits = cleanPhone(phone);

  if (digits === null) {
    return "Невірний формат номера телефону";
  }

  const code = digits.slice(1, 3);
  const part1 = digits.slice(3, 6);
  const part2 = digits.slice(6, 8);
  const part3 = digits.slice(8, 10);

  return "+38 (0" + code + ") " + part1 + "-" + part2 + "-" + part3;
}

console.log(formattedPhone("+380664567890"));

function showResult() {
  const phone = document.getElementById("phoneInput").value;
  document.getElementById("result").innerText = formattedPhone(phone);
}

function startInteractive() {
  const phone = prompt("Введіть номер телефону:");
  alert(formattedPhone(phone));
}
