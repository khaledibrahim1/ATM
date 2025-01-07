let account = 1000; // الرصيد الابتدائي للحساب

function authenticate() {
  let password = document.getElementById('password').value;

  if (password === "1234") {
    document.getElementById('output').innerHTML = "<strong>Welcome to ATM</strong><br>";
    document.getElementById('atmContainer').style.display = 'none'; // إخفاء حقل إدخال كلمة المرور
    document.getElementById('operations').style.display = 'block'; // عرض أزرار العمليات
    document.getElementById('output').style.display = 'block'; // عرض حاوية النتائج
    showBalance(); // عرض الرصيد الحالي عند الدخول
  } else {
    document.getElementById('output').innerHTML = "Invalid password";
  }
}

function withdraw() {
  let amount = prompt("Enter amount to withdraw:");
  amount = parseInt(amount);

  if (!isNaN(amount) && amount > 0 && amount <= account) {
    account -= amount;
    document.getElementById('output').innerHTML += "<br>Withdrawn: " + amount + "<br>Your account balance: " + account;
  } else {
    document.getElementById('output').innerHTML += "<br>Invalid amount entered or insufficient balance.";
  }
}

function deposit() {
  let amount = prompt("Enter amount to deposit:");
  amount = parseInt(amount);

  if (!isNaN(amount) && amount > 0) {
    account += amount;
    document.getElementById('output').innerHTML += "<br>Deposited: " + amount + "<br>Your account balance: " + account;
  } else {
    document.getElementById('output').innerHTML += "<br>Invalid amount entered.";
  }
}

function showBalance() {
  document.getElementById('output').innerHTML += "<br>Your account balance: " + account;
}

function exit() {
  document.getElementById('output').innerHTML = "<br>Exited";
  document.getElementById('operations').style.display = 'none'; // إخفاء أزرار العمليات
  document.getElementById('atmContainer').style.display = 'block'; // عرض حقل إدخال كلمة المرور مجددًا
}