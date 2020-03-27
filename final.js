var vocab = [];
var answer = [];
var def = [];
var score = 0;
var items = [];
var randomNum;
var applause = new Audio("applause.mp3");
var fail = new Audio("fail.mp3");

//Item1
function storeItem1() {
  vocab.push(document.querySelector(".type-vocab1").value);
  document.querySelector(".display-vocab1").innerHTML = vocab[0];
};
function storeItem2() {
  def.push(document.querySelector(".type-def1").value);
  document.querySelector(".display-def1").innerHTML = def[0];
};

//Item2
function storeItem3() {
  vocab.push(document.querySelector(".type-vocab2").value);
  document.querySelector(".display-vocab2").innerHTML = vocab[1];
};
function storeItem4() {
  def.push(document.querySelector(".type-def2").value);
  document.querySelector(".display-def2").innerHTML = def[1];
};

//Item3
function storeItem5() {
  vocab.push(document.querySelector(".type-vocab3").value);
  document.querySelector(".display-vocab3").innerHTML = vocab[2];
};
function storeItem6() {
  def.push(document.querySelector(".type-def3").value);
  document.querySelector(".display-def3").innerHTML = def[2];
};

//Item4
function storeItem7() {
  vocab.push(document.querySelector(".type-vocab4").value);
  document.querySelector(".display-vocab4").innerHTML = vocab[3];
};
function storeItem8() {
  def.push(document.querySelector(".type-def4").value);
  document.querySelector(".display-def4").innerHTML = def[3];
};

//Item5
function storeItem9() {
  vocab.push(document.querySelector(".type-vocab5").value);
  document.querySelector(".display-vocab5").innerHTML = vocab[4];
};
function storeItem10() {
  def.push(document.querySelector(".type-def5").value);
  document.querySelector(".display-def5").innerHTML = def[4];
};

//Ite6
function storeItem11() {
  vocab.push(document.querySelector(".type-vocab6").value);
  document.querySelector(".display-vocab6").innerHTML = vocab[5];
};
function storeItem12() {
  def.push(document.querySelector(".type-def6").value);
  document.querySelector(".display-def6").innerHTML = def[5];
};

//Item7
function storeItem13() {
  vocab.push(document.querySelector(".type-vocab7").value);
  document.querySelector(".display-vocab7").innerHTML = vocab[6];
};
function storeItem14() {
  def.push(document.querySelector(".type-def7").value);
  document.querySelector(".display-def7").innerHTML = def[6];
};

//Item8
function storeItem15() {
  vocab.push(document.querySelector(".type-vocab8").value);
  document.querySelector(".display-vocab8").innerHTML = vocab[7];
};
function storeItem16() {
  def.push(document.querySelector(".type-def8").value);
  document.querySelector(".display-def8").innerHTML = def[7];
};

//Item9
function storeItem17() {
  vocab.push(document.querySelector(".type-vocab9").value);
  document.querySelector(".display-vocab9").innerHTML = vocab[8];
};
function storeItem18() {
  def.push(document.querySelector(".type-def9").value);
  document.querySelector(".display-def9").innerHTML = def[8];
};

//Item10
function storeItem19() {
  vocab.push(document.querySelector(".type-vocab10").value);
  document.querySelector(".display-vocab10").innerHTML = vocab[9];
};
function storeItem20() {
  def.push(document.querySelector(".type-def10").value);
  document.querySelector(".display-def10").innerHTML = def[9];
};

function randomGenerator() {
  randomNum = Math.floor(Math.random() * items.length);
  document.querySelector(".question-def1").innerHTML = def[0];
  document.querySelector(".question-def2").innerHTML = def[1];
  document.querySelector(".question-def3").innerHTML = def[2];
  document.querySelector(".question-def4").innerHTML = def[3];
  document.querySelector(".question-def5").innerHTML = def[4];
  document.querySelector(".question-def6").innerHTML = def[5];
  document.querySelector(".question-def7").innerHTML = def[6];
  document.querySelector(".question-def8").innerHTML = def[7];
  document.querySelector(".question-def9").innerHTML = def[8];
  document.querySelector(".question-def10").innerHTML = def[9];
};

function shuffle(array1, array2) {
  for (var i = array1.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    // swap elements array[i] and array[j]
    [array1[i], array1[j]] = [array1[j], array1[i]];
    [array2[i], array2[j]] = [array2[j], array2[i]];
  };
};

function storeAll() {
  storeItem1();
  storeItem2();
  storeItem3();
  storeItem4();
  storeItem5();
  storeItem6();
  storeItem7();
  storeItem8();
  storeItem9();
  storeItem10();
  storeItem11();
  storeItem12();
  storeItem13();
  storeItem14();
  storeItem15();
  storeItem16();
  storeItem17();
  storeItem18();
  storeItem19();
  storeItem20();
  document.querySelector(".nextStore").innerHTML = "Done";
  document.querySelector(".nextStore").onclick = doNothing();
  document.querySelector(".nextStore").style.background = "yellow";
}

function goPage2() {
  document.querySelector(".grid-container1").classList.add("invis");
  document.querySelector(".grid-container2").classList.remove("invis");
  shuffle(def, vocab);
  document.querySelector(".question-def1").innerHTML = def[0];
  document.querySelector(".question-def2").innerHTML = def[1];
  document.querySelector(".question-def3").innerHTML = def[2];
  document.querySelector(".question-def4").innerHTML = def[3];
  document.querySelector(".question-def5").innerHTML = def[4];
  document.querySelector(".question-def6").innerHTML = def[5];
  document.querySelector(".question-def7").innerHTML = def[6];
  document.querySelector(".question-def8").innerHTML = def[7];
  document.querySelector(".question-def9").innerHTML = def[8];
  document.querySelector(".question-def10").innerHTML = def[9];
};

function doNothing() {
}

//Item1
function checkItem1() {
  var userAns = document.querySelector(".answer-vocab1").value;
  if (userAns == vocab[0]) {
    document.querySelector(".enter-vocab1").innerHTML = "Correct";
    document.querySelector(".enter-vocab1").onclick = doNothing();
    document.querySelector(".enter-vocab1").style.background = "green";
    score = score + 1;
  } else {
    document.querySelector(".enter-vocab1").innerHTML = "Wrong";
    document.querySelector(".enter-vocab1").onclick = doNothing();
    document.querySelector(".enter-vocab1").style.background = "red";
  }
}

//Item2
function checkItem2() {
  var userAns = document.querySelector(".answer-vocab2").value;
  if (userAns == vocab[1]) {
    document.querySelector(".enter-vocab2").innerHTML = "Correct";
    document.querySelector(".enter-vocab2").onclick = doNothing();
    document.querySelector(".enter-vocab2").style.background = "green";
    score = score + 1;
  } else {
    document.querySelector(".enter-vocab2").innerHTML = "Wrong";
    document.querySelector(".enter-vocab2").onclick = doNothing();
    document.querySelector(".enter-vocab2").style.background = "red";
  }
}

//Item3
function checkItem3() {
  var userAns = document.querySelector(".answer-vocab3").value;
  if (userAns == vocab[2]) {
    document.querySelector(".enter-vocab3").innerHTML = "Correct";
    document.querySelector(".enter-vocab3").onclick = doNothing();
    document.querySelector(".enter-vocab3").style.background = "green";
    score = score + 1;
  } else {
    document.querySelector(".enter-vocab3").innerHTML = "Wrong";
    document.querySelector(".enter-vocab3").onclick = doNothing();
    document.querySelector(".enter-vocab3").style.background = "red";
  }
}
//Item4
function checkItem4() {
  var userAns = document.querySelector(".answer-vocab4").value;
  if (userAns == vocab[3]) {
    document.querySelector(".enter-vocab4").innerHTML = "Correct";
    document.querySelector(".enter-vocab4").onclick = doNothing();
    document.querySelector(".enter-vocab4").style.background = "green";
    score = score + 1;
  } else {
    document.querySelector(".enter-vocab4").innerHTML = "Wrong";
    document.querySelector(".enter-vocab4").onclick = doNothing();
    document.querySelector(".enter-vocab4").style.background = "red";
  }
}
//Item5
function checkItem5() {
  var userAns = document.querySelector(".answer-vocab5").value;
  if (userAns == vocab[4]) {
    document.querySelector(".enter-vocab5").innerHTML = "Correct";
    document.querySelector(".enter-vocab5").onclick = doNothing();
    document.querySelector(".enter-vocab5").style.background = "green";
    score = score + 1;
  } else {
    document.querySelector(".enter-vocab5").innerHTML = "Wrong";
    document.querySelector(".enter-vocab5").onclick = doNothing();
    document.querySelector(".enter-vocab5").style.background = "red";
  }
}

//Item6
function checkItem6() {
  var userAns = document.querySelector(".answer-vocab6").value;
  if (userAns == vocab[5]) {
    document.querySelector(".enter-vocab6").innerHTML = "Correct";
    document.querySelector(".enter-vocab6").onclick = doNothing();
    document.querySelector(".enter-vocab6").style.background = "green";
    score = score + 1;
  } else {
    document.querySelector(".enter-vocab6").innerHTML = "Wrong";
    document.querySelector(".enter-vocab6").onclick = doNothing();
    document.querySelector(".enter-vocab6").style.background = "red";
  }
}

//Item7
function checkItem7() {
  var userAns = document.querySelector(".answer-vocab7").value;
  if (userAns == vocab[6]) {
    document.querySelector(".enter-vocab7").innerHTML = "Correct";
    document.querySelector(".enter-vocab7").onclick = doNothing();
    document.querySelector(".enter-vocab7").style.background = "green";
    score = score + 1;
  } else {
    document.querySelector(".enter-vocab7").innerHTML = "Wrong";
    document.querySelector(".enter-vocab7").onclick = doNothing();
    document.querySelector(".enter-vocab7").style.background = "red";
  }
}

//Item8
function checkItem8() {
  var userAns = document.querySelector(".answer-vocab8").value;
  if (userAns == vocab[7]) {
    document.querySelector(".enter-vocab8").innerHTML = "Correct";
    document.querySelector(".enter-vocab8").onclick = doNothing();
    document.querySelector(".enter-vocab8").style.background = "green";
    score = score + 1;
  } else {
    document.querySelector(".enter-vocab8").innerHTML = "Wrong";
    document.querySelector(".enter-vocab8").onclick = doNothing();
    document.querySelector(".enter-vocab8").style.background = "red";
  }
}
//Item9
function checkItem9() {
  var userAns = document.querySelector(".answer-vocab9").value;
  if (userAns == vocab[8]) {
    document.querySelector(".enter-vocab9").innerHTML = "Correct";
    document.querySelector(".enter-vocab9").onclick = doNothing();
    document.querySelector(".enter-vocab9").style.background = "green";
    score = score + 1;
  } else {
    document.querySelector(".enter-vocab9").innerHTML = "Wrong";
    document.querySelector(".enter-vocab9").onclick = doNothing();
    document.querySelector(".enter-vocab9").style.background = "red";
  }
}
//Item10
function checkItem10() {
  var userAns = document.querySelector(".answer-vocab10").value;
  if (userAns == vocab[9]) {
    document.querySelector(".enter-vocab10").innerHTML = "Correct";
    document.querySelector(".enter-vocab10").onclick = doNothing();
    document.querySelector(".enter-vocab10").style.background = "green";
    score = score + 1;
  } else {
    document.querySelector(".enter-vocab10").innerHTML = "Wrong";
    document.querySelector(".enter-vocab10").onclick = doNothing();
    document.querySelector(".enter-vocab10").style.background = "red";
  }
}

function goPage3() {
  document.querySelector(".grid-container2").classList.add("invis");
  document.querySelector(".grid-container3").classList.remove("invis");
};

document.querySelector(".nextPage3").addEventListener("click", function(){
  document.querySelector(".resultPoint").innerHTML = "You got " + score + " out of 10 or " + score*10 + "%";
  if (score > 5) {
    applause.play();
    document.querySelector(".resultImage").innerHTML = '<img src="good-job.gif">';
  } else {
    fail.play();
    document.querySelector(".resultImage").innerHTML = '<img src="fail.gif">';
  }
});

function testAgain() {
  document.querySelector(".grid-container3").classList.add("invis");
  document.querySelector(".grid-container2").classList.remove("invis");
};

function testBack() {
  document.querySelector(".grid-container3").classList.add("invis");
  document.querySelector(".grid-container1").classList.remove("invis");
};
