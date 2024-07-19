const correctCode = "0213";
let enteredCode = "";

function addNumber(num) {
  if (enteredCode.length < 4) {
    enteredCode += num;
    document.getElementById("code").value = enteredCode;
  }
}

function clearCode() {
  enteredCode = "";
  document.getElementById("code").value = enteredCode;
  document.getElementById("message").innerText = "";
}

function checkCode() {
  if (enteredCode === correctCode) {
    document.getElementById("code-keyboard").remove();
    const element = document.getElementById("message");
    element.style.display = "block";
  } else {
    document.getElementById("error").innerText =
      "Code incorrect. Essayez encore.";
    document.getElementById("error").style.color = "red";
  }
}
