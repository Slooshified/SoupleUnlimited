fetch('./scripts/soupdata.json')
    .then(response => response.json())
    .then(json => {
        console.log(json);
        let correctsoupvalue = Math.floor(Math.random() * 12 + 1);

        // counting the number of guesses
        // made for correct Guess
        let guesses = 1;

        document.getElementById("submitguess").onclick = function () {

            // number guessed by user
            let soupguess = document.getElementById("guessField").value;

            if (soupguess == correctsoupvalue) {
                alert("You got the soup! You guessed it right after " + guesses + " attempts ");
            }
            else if (soupguess > correctsoupvalue) /* if guessed number is greater
            than actual number*/ {
                guesses++;
                alert("That soup was too high on the spectrum. Please try again.");
            } else {
                guesses++;
                alert("That soup was too low on the soup spectrum. Please try again.");
            }
        }
    })
    .catch(err => console.error(`Fetch problem: ${err.message}`));

// random value generated
