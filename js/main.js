let encryptBtn = document.getElementById("encrypt-btn");
let encryptInput = document.getElementById("encryptedInput-1");
let plainInput = document.getElementById("plainInput-1");
let inputs = [encryptInput, plainInput];
let copyBtn = document.getElementById("copyToClipBoard");
let shiftInput = document.getElementById('shiftInput');

for (let i = 0; i < inputs.length; i++) {
  inputs[i].oninput = function () {
    this.value = this.value.toUpperCase();
  };
}

function encrypt() {
  let plainInputValue = plainInput.value;
  let solved = '';
  let shiftInputValue = parseInt(shiftInput.value);

  for (let i = 0; i < plainInputValue.length; i++) {
    let ascii_num = plainInputValue.charCodeAt(i);

    if (ascii_num >= 65 && ascii_num <= 90) {
      let sum = ascii_num + shiftInputValue;
      solved += String.fromCharCode((sum - 65) % 26 + 65);
    } else {
      solved += plainInputValue[i];
    }
  }
  encryptInput.value = solved; // Assign the encrypted value to encryptInput
}

function copyText() {
  encryptInput.select();
  encryptInput.setSelectionRange(0, 99999);
  document.execCommand('copy');
  Swal.fire("Copied to clipboard: " + encryptInput.value);
}

copyBtn.addEventListener("click", copyText);
encryptBtn.addEventListener("click", encrypt);
