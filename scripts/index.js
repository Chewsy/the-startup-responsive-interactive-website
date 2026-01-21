let details = document.querySelector("details");

details.addEventListener("click", () => {
    document.querySelector("header").style.alignItems = 'flex-start';
});

// stap 1: click event + listener op de convert knop
document.querySelector("#convertButton").addEventListener("click", function (event) {
    // stap 2: variabele van de textarea ophalen
    const asciiInput = document.querySelector("#ascii");
    console.log(asciiInput);
    // stap 3: als de input niet leeg is !=, voer if else uit
    if (asciiInput.value !== "") {
        // voorkomt submit functie
        event.preventDefault();
        document.querySelector("#result").style.display= "block";
    }
});