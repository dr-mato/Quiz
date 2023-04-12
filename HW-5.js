let count = 0;
let correct = 0;

function changes() {
  if (count == 0) {
    document.querySelector("p").textContent = "Who is the President of US?";
    document.getElementById("one").textContent = "Donald Trump";
    document.getElementById("two").textContent = "JoeBiden";
    document.getElementById("three").textContent = "Hillary Clinton";
    document.getElementById("four").textContent = "Bernie Sanders";
    if (document.getElementById("ans4").checked) {
      correct++;
    }
  } else if (count == 1) {
    document.querySelector("p").textContent = "What does HTML stand for?";
    document.getElementById("one").textContent = "Hypertext Markup Language";
    document.getElementById("two").textContent = "Cascading Style Sheet";
    document.getElementById("three").textContent = "Jason Object Notation";
    document.getElementById("four").textContent = "none of the above";
    if (document.getElementById("ans2").checked) {
      correct++;
    }
  } else if (count == 2) {
    document.querySelector("p").textContent =
      "What year was the JavaScript launched?";
    document.getElementById("one").textContent = "1993";
    document.getElementById("two").textContent = "1994";
    document.getElementById("three").textContent = "1995";
    document.getElementById("four").textContent = "1996";
    if (document.getElementById("ans1").checked) {
      correct++;
    }
  } else if (count == 3) {
    if (document.getElementById("ans3").checked) {
      correct++;
    }
    document.getElementById("quiz").style.height = "18vh";
    document.querySelector("button").textContent = "Reload";
    document.querySelector(
      "p"
    ).textContent = `You answered correctly at ${correct}/4 points`;
    document.getElementById("first").remove();
    document.getElementById("second").remove();
    document.getElementById("third").remove();
    document.getElementById("fourth").remove();
  } else if (count == 4) {
    return true;
  }
  count++;
  return false;
}
