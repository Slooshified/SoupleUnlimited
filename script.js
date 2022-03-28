  const soupdata = fetch('./soupdata.json');
// random value generated
  var y = Math.floor(Math.random() * 12 + 1);
      
  // counting the number of guesses
  // made for correct Guess
  var guess = 1;
      
  document.getElementById("submitguess").onclick = function(){
      
  // number guessed by user     
  var x = document.getElementById("guessField").value;
  
  if(x == y) {    
    alert("You got the soup! You guessed it right after " + guess + " attempts ");
  }
  else if(x > y) /* if guessed number is greater
  than actual number*/ {    
    guess++;
    alert("That soup was too high on the spectrum. Please try again.");
  } else {
    guess++;
    alert("That soup was too low on the soup spectrum. Please try again.");
  }
}