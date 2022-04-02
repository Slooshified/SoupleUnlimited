fetch('./scripts/soupdata.json')
    .then(response => response.json())
    .then(soupdata => {
        console.log(soupdata);
        let correctsoupvalue = Math.floor(Math.random() * 12 + 1);

        // counting the number of guesses
        // made for correct Guess
        let guesses = 1;

        document.getElementById("submitguess").onclick = function () {

            // number guessed by user
            let soupguess = document.getElementById("guessField").value;

            if (soupguess == correctsoupvalue) {
                document.getElementById('guessinfo').innerHTML = "You got the soup! You guessed it right after " + guesses + " attempts ";
                document.getElementById('guessField').value = "";
            }
            else if (soupguess > correctsoupvalue) /* if guessed number is greater
            than actual number*/ {
                guesses++;
                document.getElementById('guessinfo').innerHTML = "That soup was too high on the spectrum. Please try again.";
                document.getElementById('guessField').value = "";
            } else {
                guesses++;
                document.getElementById('guessinfo').innerHTML = "That soup was too low on the soup spectrum. Please try again.";
                document.getElementById('guessField').value = "";
            }
        }
    })
    .catch(err => console.error(`Fetch problem: ${err.message}`));

// random value generated
