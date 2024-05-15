let player1 = document.getElementById("img1");
let player2 = document.getElementById("img2");
let result = document.getElementById("result");
result.innerHTML = "Lets play";
let p1score = [];
let p2score = [];

let sumofp1 = 0;
let sumofp2 = 0;
let winner;

function randomnumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function changeimage() {
  result.innerHTML = "";
  let random1 = randomnumber();
  let random2 = randomnumber();
  let tablediv = document.getElementById("inner-table-cc");
  let n = tablediv.rows.length;

  player1.src = "img/dice" + random1 + ".png";
  setTimeout(() => {
    player2.src = "img/dice" + random2 + ".png";
  }, 100);

  if (n < 7) {
    let row = document.createElement("tr");
    let col1 = document.createElement("td");
    row.appendChild(col1);
    col1.innerHTML = "Total Scored";
    let col2 = document.createElement("td");
    row.appendChild(col2);
    col2.innerHTML = sumofp1;
    let col3 = document.createElement("td");
    row.appendChild(col3);
    col3.innerHTML = sumofp2;

    let col4 = document.createElement("td");
    row.appendChild(col4);
    col4.innerHTML = winner;
  }

  setTimeout(() => {
    if (n == 5) {
      document.getElementById("btn-1").style.display = "none";
      document.getElementById("btn-2").style.display = "block";
      result.innerHTML = "Winner is heloo";
    } else if (random1 > random2) {
      result.innerHTML = "Player 1 Wins";
    } else if (random1 < random2) {
      result.innerHTML = "Player 2 Wins";
    } else {
      result.innerHTML = "Draw";
    }
  }, 200);

  for (let i = 0; i < 1; i++) {
    let row = document.createElement("tr");
    let col1 = document.createElement("td");
    col1.innerHTML = n;
    row.appendChild(col1);
    let col2 = document.createElement("td");
    col2.innerHTML = random1;
    p1score.push(random1);
    row.appendChild(col2);
    let col3 = document.createElement("td");
    col3.innerHTML = random2;
    p2score.push(random2);
    row.appendChild(col3);
    let col4 = document.createElement("td");
    if (random1 > random2) {
      col4.innerHTML = 'P-1';
    } else if (random1 < random2) {
      col4.innerHTML = 'P-2';
    } else {
      col4.innerHTML = 'Draw';
    }
    row.appendChild(col4);
    tablediv.appendChild(row);
  }

  p1score.forEach(function(value) {
    console.log(value);
    sumofp1 += value;
    console.log(sumofp1);
  });

  p2score.forEach(function(value) {
    sumofp2 += value;
  });

  console.log(p1score);
}

function reset() {
  player1.src = "img/dice6.png";
  player2.src = "img/dice6.png";
  document.getElementById("btn-1").style.display = "block";
  document.getElementById("btn-2").style.display = "none";

  let allrow = document.querySelectorAll('tr');

  for (let i = 1; i < allrow.length; i++) {
    allrow[i].remove();
  }

  result.innerHTML = "Let's play again";
}