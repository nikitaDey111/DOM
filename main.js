// 1

// let input= document.getElementById('inpt');
// let abz= document.getElementById('parag');

// input.addEventListener("blur", function(){
//     abz.innerHTML += '' + input.value;
// });
// =====================================================
// 2

// let input1= document.getElementById('input1');
// let input2= document.getElementById('input2');
// let input3= document.getElementById('input3');
// let button= document.getElementById('but');
// let abz= document.getElementById('parag');

// button.addEventListener('click', function(){
//     let sum= Number(input1.value)+Number(input2.value)+Number(input3.value);
//     abz.innerHTML = 'сумма: ' + sum;
// });
// ==========================================================
// 3

// let input= document.getElementById('inpt');
// let abz= document.getElementById('parag');

// input.addEventListener('blur', function(){
//     let num = Number(input.value);
//     let sum = 0;
//     while (num) {
//         sum += num % 10;
//         num = Math.floor(num / 10);
//     }
//     abz.innerHTML = 'сумма цифр: ' + sum;
// });
// ============================================================
// 4

// let input = document.getElementById('input');
// let paragraph = document.getElementById('parag');

// input.addEventListener('blur', function() {
//   let numbers = input.value.split(',').map(Number);
//   let sum = numbers.reduce(function(a, c) {
//     return a + c;
//   }, 0);
//   let cred = sum / numbers.length;
//   paragraph.innerHTML = 'cреднее арифметическое: ' + cred;
// });
// ===============================================================
// 5

// let fioInput = document.getElementById('fio');
// let surnameInput = document.getElementById('surname');
// let nameInput = document.getElementById('name');
// let otchInput = document.getElementById('otch');

// fioInput.addEventListener('blur', function() {
//   let fioName = fioInput.value.split(' ');
//   let surName = fioName[0];
//   let nameName = fioName[1];
//   let otchName = fioName[2];
//   surnameInput.value = surName;
//   nameInput.value = nameName;
//   otchInput.value = otchName;
// });
// =======================================================================
// 6

// function BigFio() {
//     let input = document.getElementById("fio");
//     let name = input.value.toLowerCase().split(" ");
//     for (let i = 0; i < name.length; i++) {
//       name[i] = name[i].charAt(0).toUpperCase() + name[i].slice(1);
//     }
//     input.value = name.join(" ");
//   }
  
//   document.getElementById("fio").addEventListener("blur", BigFio);
// ===========================================================================
// 7
// let input = document.getElementById("inpt");
// let abz= document.getElementById('parag');
// input.addEventListener("blur",  function() {
//     let text = input.value.split(" ").length;
//     abz.innerHTML =  'количество слов ' + text;
// })
// ===========================================================
// 8
//  let inpdata = document.getElementById("inpdata");
//  inpdata.addEventListener("blur",  function(){
//     let input = inpdata.value;
//     let parts = input.split('.');
//     let outdata = parts[2] + "-" + parts[1] + "-" + parts[0];
//     inpdata.value = outdata;
//  })
// =================================================================
// 9
// let word = document.getElementById('inpt');
// let button = document.getElementById('check');

// button.addEventListener('click', function() {
//   let reg = word.value.toLowerCase();
//   let revers = reg.split('').reverse().join('');
//   if (reg === revers) {
//     alert('слово читается с начала и с конца одинаково');
//   } else {
//     alert('слово НЕ читается с начала и с конца одинаково');
//   }
// });
// ==================================================================
// 10
// let input = document.getElementById("inpt");

// input.addEventListener('blur', function(){
//    let num = input.value;
//     if (num.includes('3')) {
//       alert('число содержит внутри себя цифру 3')
//     }
//     else{
//       alert('число НЕ содержит внутри себя цифру 3')
//     }
// })
// =================================================================
// 11
// let abz = document.querySelectorAll('p');
// let button = document.querySelector('button');

// button.addEventListener('click', function(){
//    for ( let i = 0; i< abz.length; i++){
//       let parag = abz[i];
//       parag.textContent += ' ' + (i+1);
//    }
// });
// ===============================================================
// 12
// let link = document.getElementsByTagName('a');
// for (let i = 0; i < link.length; i++) {
//    let href = link[i].getAttribute('href');
//    let text = link[i].textContent;
//    link[i].textContent = text + ' (' + href + ') ';
// }
// ==============================================================
// 13
// let link = document.getElementsByTagName('a');
// for (let i = 0; i < link.length; i++) {
//       let href = link[i].getAttribute('href');
//       if (href.startsWith('https://')) {
//          link[i].textContent += '→';
//       }
// }
// ===============================================================
// 14
// let parag = document.querySelectorAll('p');

// parag.forEach(paragraph =>{
//    paragraph.addEventListener('click', function(){
//       let number = parseInt(paragraph.textContent);
//       let square = number ** 2;
//       paragraph.textContent = square;
//    });
// });
// ==============================================================
// 15
// let inpdata = document.getElementById("inptdata");
// inpdata.addEventListener('blur', function(){
//    let date = new Date(inpdata.value);
//    let day = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
//    let dayweek = day[date.getDay()];
//    alert(dayweek);
// })
// ==============================================================
// 16
// let inputnumber = document.getElementById('number');
// let plusbutton = document.getElementById('plus');
// let minusbutton = document.getElementById('minus');

// plusbutton.addEventListener('click', function() {
//   inputnumber.value = parseInt(inputnumber.value) + 1;
// });

// minusbutton.addEventListener('click', function() {
//   let Value = parseInt(inputnumber.value);
//   if (Value > 0) {
//     inputnumber.value = Value - 1;
//   }
// });
// ==========================================================
// 17
   // let click = document.getElementById('click');
   // let parag = document.getElementsByTagName('p');
   // let count = 0;
 
   // for (let i = 0; i < parag.length; i++) {
   //   parag[i].addEventListener('click', function() {
   //     count++;
   //     click.value = count;
   //   });
   // }
   // =========================================================
   // 18
   // let divs = document.querySelectorAll('div');
   // divs.forEach(div => {
   //    let text = div.textContent;
   //    if (text.length > 10){
   //       let reptext = text.substring(0,10) + '...';
   //       div.textContent = reptext;
   //    }
   // })
   // =====================================================
   // 19
   // function generateRandomString(length) {
   //    let charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   //    let randomString = '';
   //    for (let i = 0; i < length; i++) {
   //      let randomIndex = Math.floor(Math.random() * charSet.length);
   //      randomString += charSet[randomIndex];
   //    }
   //    return randomString;
   //  }
   //  document.getElementById('generate').addEventListener('click', function() {
   //    let randomString = generateRandomString(8);
   //    document.getElementById('random').value = randomString;
   //  });
   // ===============================================================
   // 20
   // function shuffleString(str) {
   //    let arr = str.split('');
   //    for (let i = arr.length - 1; i > 0; i--) {
   //      let j = Math.floor(Math.random() * (i + 1));
   //      let newarr = arr[i];
   //      arr[i] = arr[j];
   //      arr[j] = newarr;
   //    }
   //    return arr.join('');
   //  }
   //  document.getElementById('shuffle').addEventListener('click', function() {
   //    var input = document.getElementById('text');
   //    var shufflstr = shuffleString(input.value);
   //    input.value = shufflstr;
   //  });
   // ================================================================
   // 22
   // function calculateFactorial() {
   //    var input = document.getElementById("number").value;
   //    var factorial = 1;
      
   //    for (var i = 2; i <= input; i++) {
   //          factorial *= i;
   //    }
      
   //    document.getElementById("result").textContent = "факториал числа " + input + " равен " + factorial;
   // }
   // ===============================================================
   // 23
   // function solveEquation() {
   //    let A = parseFloat(document.getElementById("A").value);
   //    let B = parseFloat(document.getElementById("B").value);
   //    let C = parseFloat(document.getElementById("C").value);
   //    let discriminant = B * B - 4 * A * C;
    
   //    if (discriminant > 0) {
   //      let root1 = (-B + Math.sqrt(discriminant)) / (2 *A);
   //      let root2 = (-B - Math.sqrt(discriminant)) / (2 * A);
    
   //      document.getElementById("result").textContent =
   //        "корни " + root1 + " и " + root2;
   //    } else if (discriminant === 0) {
   //      let root = -coefficientB / (2 * coefficientA);
    
   //      document.getElementById("result").textContent =
   //        "один корень " + root;
   //    } else {
   //      document.getElementById("result").textContent =
   //        "нет корней";
   //    }
   //  }