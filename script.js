class Password {

    constructor(length, symbol, number, lowercase, uppercase) {
      this.symbol = symbol
      this.number = number
      this.lowercase = lowercase
      this.uppercase = uppercase
      this.length = length;
      this.password = "";
      this.alpha = "abcdefghijklmnopqrstuvwxyz";
      this.upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      this.numbers = "1234567890";
      this.symbols = `!@#$%^&*()_+-=[]{}|;':",./<>?`;
    }
  
    getsuperstrongpassword() {
      let i = 0;
      while (i < this.length) {
  
        if (this.symbol == true && this.number == true && this.lowercase == true && this.uppercase == true) {
          this.password += this.alpha[Math.floor(Math.random() * this.alpha.length)];
          this.password += this.symbols[Math.floor(Math.random() * this.symbols.length)];
          this.password += this.upper[Math.floor(Math.random() * this.upper.length)];
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
        }
        else if (this.symbol == true && this.number == true && this.lowercase == false && this.uppercase == true) {
          this.password += this.symbols[Math.floor(Math.random() * this.symbols.length)];
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
          this.password += this.symbols[Math.floor(Math.random() * this.symbols.length)];
          this.password += this.upper[Math.floor(Math.random() * this.upper.length)];
        }
        else if (this.symbol == true && this.number == false && this.lowercase == true && this.uppercase == true) {
          this.password += this.alpha[Math.floor(Math.random() * this.alpha.length)];
          this.password += this.symbols[Math.floor(Math.random() * this.symbols.length)];
          this.password += this.upper[Math.floor(Math.random() * this.upper.length)];
          this.password += this.symbols[Math.floor(Math.random() * this.symbols.length)];
        }
        else if (this.symbol == false && this.number == true && this.lowercase == true && this.uppercase == true) {
          this.password += this.alpha[Math.floor(Math.random() * this.alpha.length)];
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
          this.password += this.alpha[Math.floor(Math.random() * this.alpha.length)];
          this.password += this.upper[Math.floor(Math.random() * this.upper.length)];
        }
        else if (this.symbol == true && this.number == true && this.lowercase == true && this.uppercase == false) {
          this.password += this.alpha[Math.floor(Math.random() * this.alpha.length)];
          this.password += this.symbols[Math.floor(Math.random() * this.symbols.length)];
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
          this.password += this.symbols[Math.floor(Math.random() * this.symbols.length)];
        }
        else if (this.symbol == false && this.number == true && this.lowercase == false && this.uppercase == true) {
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
          this.password += this.upper[Math.floor(Math.random() * this.upper.length)];
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
          this.password += this.upper[Math.floor(Math.random() * this.upper.length)];
        }
        else if (this.symbol == false && this.number == false && this.lowercase == true && this.uppercase == true) {
          this.password += this.alpha[Math.floor(Math.random() * this.alpha.length)];
          this.password += this.upper[Math.floor(Math.random() * this.upper.length)];
          this.password += this.alpha[Math.floor(Math.random() * this.alpha.length)];
          this.password += this.upper[Math.floor(Math.random() * this.upper.length)];
        }
        else if (this.symbol == false && this.number == true && this.lowercase == true && this.uppercase == false) {
          this.password += this.alpha[Math.floor(Math.random() * this.alpha.length)];
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
          this.password += this.alpha[Math.floor(Math.random() * this.alpha.length)];
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
        }
        else if (this.symbol == true && this.number == false && this.lowercase == false && this.uppercase == true) {
          this.password += this.symbols[Math.floor(Math.random() * this.symbols.length)];
          this.password += this.symbols[Math.floor(Math.random() * this.symbols.length)];
          this.password += this.symbols[Math.floor(Math.random() * this.symbols.length)];
          this.password += this.upper[Math.floor(Math.random() * this.upper.length)];
        }
        else if (this.symbol == true && this.number == false && this.lowercase == true && this.uppercase == false) {
          this.password += this.symbols[Math.floor(Math.random() * this.symbols.length)];
          this.password += this.alpha[Math.floor(Math.random() * this.alpha.length)];
          this.password += this.symbols[Math.floor(Math.random() * this.symbols.length)];
          this.password += this.symbols[Math.floor(Math.random() * this.symbols.length)];
        }
        else if (this.symbol == true && this.number == true && this.lowercase == false && this.uppercase == false) {
          this.password += this.symbols[Math.floor(Math.random() * this.symbols.length)];
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
          this.password += this.symbols[Math.floor(Math.random() * this.symbols.length)];
          this.password += this.symbols[Math.floor(Math.random() * this.symbols.length)];
        }
        else if (this.symbol == true && this.number == false && this.lowercase == false && this.uppercase == false) {
          this.password += this.symbols[Math.floor(Math.random() * this.symbols.length)];
          this.password += this.symbols[Math.floor(Math.random() * this.symbols.length)];
          this.password += this.symbols[Math.floor(Math.random() * this.symbols.length)];
          this.password += this.symbols[Math.floor(Math.random() * this.symbols.length)];
        }
        else if (this.symbol == false && this.number == true && this.lowercase == false && this.uppercase == false) {
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
        }
        else if (this.symbol == false && this.number == false && this.lowercase == true && this.uppercase == false) {
          this.password += this.alpha[Math.floor(Math.random() * this.alpha.length)];
          this.password += this.alpha[Math.floor(Math.random() * this.alpha.length)];
          this.password += this.alpha[Math.floor(Math.random() * this.alpha.length)];
          this.password += this.alpha[Math.floor(Math.random() * this.alpha.length)];
        }
        else if (this.symbol == false && this.number == false && this.lowercase == false && this.uppercase == true) {
          this.password += this.upper[Math.floor(Math.random() * this.upper.length)];
          this.password += this.upper[Math.floor(Math.random() * this.upper.length)];
          this.password += this.upper[Math.floor(Math.random() * this.upper.length)];
          this.password += this.upper[Math.floor(Math.random() * this.upper.length)];
        }
        i += 4
      }
      let newpass = this.password.substr(0, this.length)
      return newpass;
    }
  
    getstrongpassword() {
      let i = 0;
      while (i < this.length) {
        if (this.symbol == true && this.number == true && this.lowercase == true && this.uppercase == true) {
          this.password += this.alpha[Math.floor(Math.random() * this.alpha.length)];
          this.password += this.symbols[Math.floor(Math.random() * this.symbols.length)];
          this.password += this.upper[Math.floor(Math.random() * this.upper.length)];
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
        }
        else if (this.symbol == true && this.number == true && this.lowercase == false && this.uppercase == true) {
          this.password += this.symbols[Math.floor(Math.random() * this.symbols.length)];
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
          this.password += this.upper[Math.floor(Math.random() * this.upper.length)];
          this.password += this.upper[Math.floor(Math.random() * this.upper.length)];
        }
        else if (this.symbol == true && this.number == false && this.lowercase == true && this.uppercase == true) {
          this.password += this.alpha[Math.floor(Math.random() * this.alpha.length)];
          this.password += this.symbols[Math.floor(Math.random() * this.symbols.length)];
          this.password += this.alpha[Math.floor(Math.random() * this.alpha.length)];
          this.password += this.upper[Math.floor(Math.random() * this.upper.length)];
        }
        else if (this.symbol == false && this.number == true && this.lowercase == true && this.uppercase == true) {
          this.password += this.alpha[Math.floor(Math.random() * this.alpha.length)];
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
          this.password += this.alpha[Math.floor(Math.random() * this.alpha.length)];
          this.password += this.upper[Math.floor(Math.random() * this.upper.length)];
        }
        else if (this.symbol == true && this.number == true && this.lowercase == true && this.uppercase == false) {
          this.password += this.alpha[Math.floor(Math.random() * this.alpha.length)];
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
          this.password += this.symbols[Math.floor(Math.random() * this.symbols.length)];
          this.password += this.alpha[Math.floor(Math.random() * this.alpha.length)];
        }
        else if (this.symbol == false && this.number == true && this.lowercase == false && this.uppercase == true) {
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
          this.password += this.upper[Math.floor(Math.random() * this.upper.length)];
          this.password += this.upper[Math.floor(Math.random() * this.upper.length)];
          this.password += this.upper[Math.floor(Math.random() * this.upper.length)];
        }
        else if (this.symbol == false && this.number == false && this.lowercase == true && this.uppercase == true) {
          this.password += this.alpha[Math.floor(Math.random() * this.alpha.length)];
          this.password += this.upper[Math.floor(Math.random() * this.upper.length)];
          this.password += this.alpha[Math.floor(Math.random() * this.alpha.length)];
          this.password += this.upper[Math.floor(Math.random() * this.upper.length)];
        }
        else if (this.symbol == false && this.number == true && this.lowercase == true && this.uppercase == false) {
          this.password += this.alpha[Math.floor(Math.random() * this.alpha.length)];
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
          this.password += this.alpha[Math.floor(Math.random() * this.alpha.length)];
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
        }
        else if (this.symbol == true && this.number == false && this.lowercase == false && this.uppercase == true) {
          this.password += this.symbols[Math.floor(Math.random() * this.symbols.length)];
          this.password += this.upper[Math.floor(Math.random() * this.upper.length)];
          this.password += this.upper[Math.floor(Math.random() * this.upper.length)];
          this.password += this.upper[Math.floor(Math.random() * this.upper.length)];
        }
        else if (this.symbol == true && this.number == false && this.lowercase == true && this.uppercase == false) {
          this.password += this.symbols[Math.floor(Math.random() * this.symbols.length)];
          this.password += this.alpha[Math.floor(Math.random() * this.alpha.length)];
          this.password += this.symbols[Math.floor(Math.random() * this.symbols.length)];
          this.password += this.alpha[Math.floor(Math.random() * this.alpha.length)];
        }
        else if (this.symbol == true && this.number == true && this.lowercase == false && this.uppercase == false) {
          this.password += this.symbols[Math.floor(Math.random() * this.symbols.length)];
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
          this.password += this.symbols[Math.floor(Math.random() * this.symbols.length)];
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
        }
        else if (this.symbol == true && this.number == false && this.lowercase == false && this.uppercase == false) {
          this.password += this.symbols[Math.floor(Math.random() * this.symbols.length)];
          this.password += this.symbols[Math.floor(Math.random() * this.symbols.length)];
          this.password += this.symbols[Math.floor(Math.random() * this.symbols.length)];
          this.password += this.symbols[Math.floor(Math.random() * this.symbols.length)];
        }
        else if (this.symbol == false && this.number == true && this.lowercase == false && this.uppercase == false) {
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
        }
        else if (this.symbol == false && this.number == false && this.lowercase == true && this.uppercase == false) {
          this.password += this.alpha[Math.floor(Math.random() * this.alpha.length)];
          this.password += this.alpha[Math.floor(Math.random() * this.alpha.length)];
          this.password += this.alpha[Math.floor(Math.random() * this.alpha.length)];
          this.password += this.alpha[Math.floor(Math.random() * this.alpha.length)];
        }
        else if (this.symbol == false && this.number == false && this.lowercase == false && this.uppercase == true) {
          this.password += this.upper[Math.floor(Math.random() * this.upper.length)];
          this.password += this.upper[Math.floor(Math.random() * this.upper.length)];
          this.password += this.upper[Math.floor(Math.random() * this.upper.length)];
          this.password += this.upper[Math.floor(Math.random() * this.upper.length)];
        }
        i += 4;
      }
      let newpass = this.password.substr(0, this.length)
      return newpass;
    }
  
    getweakpassword() {
      let i = 0;
      while (i < this.length) {
        if (this.symbol == true && this.number == true && this.lowercase == true && this.uppercase == true) {
          this.password += this.alpha[Math.floor(Math.random() * this.alpha.length)];
          this.password += this.symbols[Math.floor(Math.random() * this.symbols.length)];
          this.password += this.upper[Math.floor(Math.random() * this.upper.length)];
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
        }
        else if (this.symbol == true && this.number == true && this.lowercase == false && this.uppercase == true) {
          this.password += this.symbols[Math.floor(Math.random() * this.symbols.length)];
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
          this.password += this.upper[Math.floor(Math.random() * this.upper.length)];
        }
        else if (this.symbol == true && this.number == false && this.lowercase == true && this.uppercase == true) {
          this.password += this.alpha[Math.floor(Math.random() * this.alpha.length)];
          this.password += this.symbols[Math.floor(Math.random() * this.symbols.length)];
          this.password += this.alpha[Math.floor(Math.random() * this.alpha.length)];
          this.password += this.upper[Math.floor(Math.random() * this.upper.length)];
        }
        else if (this.symbol == false && this.number == true && this.lowercase == true && this.uppercase == true) {
          this.password += this.alpha[Math.floor(Math.random() * this.alpha.length)];
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
          this.password += this.upper[Math.floor(Math.random() * this.upper.length)];
        }
        else if (this.symbol == true && this.number == true && this.lowercase == true && this.uppercase == false) {
          this.password += this.alpha[Math.floor(Math.random() * this.alpha.length)];
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
          this.password += this.symbols[Math.floor(Math.random() * this.symbols.length)];
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
        }
        else if (this.symbol == false && this.number == true && this.lowercase == false && this.uppercase == true) {
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
          this.password += this.upper[Math.floor(Math.random() * this.upper.length)];
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
        }
        else if (this.symbol == false && this.number == false && this.lowercase == true && this.uppercase == true) {
          this.password += this.alpha[Math.floor(Math.random() * this.alpha.length)];
          this.password += this.upper[Math.floor(Math.random() * this.upper.length)];
          this.password += this.upper[Math.floor(Math.random() * this.upper.length)];
          this.password += this.upper[Math.floor(Math.random() * this.upper.length)];
        }
        else if (this.symbol == false && this.number == true && this.lowercase == true && this.uppercase == false) {
          this.password += this.alpha[Math.floor(Math.random() * this.alpha.length)];
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
        }
        else if (this.symbol == true && this.number == false && this.lowercase == false && this.uppercase == true) {
          this.password += this.symbols[Math.floor(Math.random() * this.symbols.length)];
          this.password += this.upper[Math.floor(Math.random() * this.upper.length)];
          this.password += this.upper[Math.floor(Math.random() * this.upper.length)];
          this.password += this.upper[Math.floor(Math.random() * this.upper.length)];
        }
        else if (this.symbol == true && this.number == false && this.lowercase == true && this.uppercase == false) {
          this.password += this.symbols[Math.floor(Math.random() * this.symbols.length)];
          this.password += this.alpha[Math.floor(Math.random() * this.alpha.length)];
          this.password += this.alpha[Math.floor(Math.random() * this.alpha.length)];
          this.password += this.alpha[Math.floor(Math.random() * this.alpha.length)];
        }
        else if (this.symbol == true && this.number == true && this.lowercase == false && this.uppercase == false) {
          this.password += this.symbols[Math.floor(Math.random() * this.symbols.length)];
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
        }
        else if (this.symbol == true && this.number == false && this.lowercase == false && this.uppercase == false) {
          this.password += this.symbols[Math.floor(Math.random() * this.symbols.length)];
          this.password += this.symbols[Math.floor(Math.random() * this.symbols.length)];
          this.password += this.symbols[Math.floor(Math.random() * this.symbols.length)];
          this.password += this.symbols[Math.floor(Math.random() * this.symbols.length)];
        }
        else if (this.symbol == false && this.number == true && this.lowercase == false && this.uppercase == false) {
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
          this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)];
        }
        else if (this.symbol == false && this.number == false && this.lowercase == true && this.uppercase == false) {
          this.password += this.alpha[Math.floor(Math.random() * this.alpha.length)];
          this.password += this.alpha[Math.floor(Math.random() * this.alpha.length)];
          this.password += this.alpha[Math.floor(Math.random() * this.alpha.length)];
          this.password += this.alpha[Math.floor(Math.random() * this.alpha.length)];
        }
        else if (this.symbol == false && this.number == false && this.lowercase == false && this.uppercase == true) {
          this.password += this.upper[Math.floor(Math.random() * this.upper.length)];
          this.password += this.upper[Math.floor(Math.random() * this.upper.length)];
          this.password += this.upper[Math.floor(Math.random() * this.upper.length)];
          this.password += this.upper[Math.floor(Math.random() * this.upper.length)];
        }
        i += 4;
      }
      let newpass = this.password.substr(0, this.length)
      return newpass;
    }
  
    getfunnypassword() {
      let arr =
        ["password", "incorrect", "iloveyou", "admin", "123456789", "iamforgetful", "qwerty", "password1", "newpassword", "yetanotherpassword", "memorysucks", "topper", "sillybilly", "KnockKnockWhosThere", "haHaHa-P@ssw0rd", "password123", "myspace", "myspace1", "ROFLcopter#42", "passwordforoldpeople", "PizzaMakesMeHappy42!", "ChocolateFountain!", "JellyfishHighFive!"]
  
      let ran = Math.floor(Math.random() * arr.length);
      this.password = arr[ran];
      return this.password;
    }
  
  }
  
  let generate = document.getElementById("generate")
  let copy = document.getElementById("copy")
  
  generate.addEventListener("click", function() {
    let len = document.getElementById("length").value;
    let length = Number.parseInt(len);
    let symbol = document.getElementById("symbol")
    let lowercase = document.getElementById("lowercase")
    let uppercase = document.getElementById("uppercase")
    let number = document.getElementById("number")
    let weak = document.getElementById("weak").checked
    let strong = document.getElementById("strong").checked
    let funny = document.getElementById("funny").checked
    let superStrong = document.getElementById("superstrong").checked
    let textview = document.getElementById("password")
  
    if (!symbol.checked && !lowercase.checked && !uppercase.checked && !number.checked) {
      alert("Please select atleast one option")
    }
    else if (!weak && !strong && !superStrong && !funny) {
      alert("Please choose the type of password you want")
    }
    else {
      let obj = new Password(length, symbol.checked, number.checked, lowercase.checked, uppercase.checked)
      if (superStrong) {
        textview.innerHTML = obj.getsuperstrongpassword()
      }
      else if (strong) {
        textview.innerHTML = obj.getstrongpassword()
      }
      else if (weak) {
        textview.innerHTML = obj.getweakpassword()
      }
      else if (funny) {
        textview.innerHTML = obj.getfunnypassword()
      }
    }
  })
  
  copy.addEventListener("click", function() {
    let textview = document.getElementById("password")
    let passwordToCopy = textview.innerHTML;
  
    navigator.clipboard.writeText(passwordToCopy)
      .then(() => {
        alert("Password copied to clipboard!");
      })
      .catch(err => {
        console.error('Unable to copy to clipboard', err);
      });
  });
  