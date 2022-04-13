fetch('./scripts/soupdata.json')
    .then(response => response.json())
    .then(soupdata => {
        console.log(soupdata);
        let correctsoupindex = Math.floor(Math.random() * 11);
        let correctsoupdata = soupdata[correctsoupindex];
        console.log(correctsoupdata)

        // counting the number of guesses
        // made for correct Guess
        let guesses = 1;

        document.getElementById("submitguess").onclick = () => {

            // number guessed by user
            let soupguess = document.getElementById("guessField").value;
            let soupguessdata = soupdata[--soupguess];
            console.log(soupguessdata);
            var guessresponce;
            if (soupguess == correctsoupindex++) {
                guessresponce = `You got the soup! You guessed it right after ${guesses.toString()} attempts. Reload Page to play again`;
            }
            else if (soupguess > correctsoupindex++) /* if guessed number is greater
            than actual number*/ {
                guesses++;
                guessresponce = "That soup was too high on the spectrum. Please try again.";
            } else {
                guesses++;
                guessresponce = "That soup was too low on the soup spectrum. Please try again.";
            }
            document.getElementById('guessresponce').innerHTML = guessresponce;
            document.getElementById('guessField').value = "";
        }
    })
    .catch(err => console.error(`Fetch problem: ${err.message}`));