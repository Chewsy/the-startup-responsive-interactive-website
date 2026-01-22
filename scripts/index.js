let details = document.querySelector("details");

details.addEventListener("click", () => {
    document.querySelector("header").style.alignItems = 'flex-start';
});

document.querySelector("#convertButton").addEventListener("click", function (event) {
    const asciiInput = document.querySelector("#ascii");
    console.log(asciiInput);
    if (asciiInput.value !== "") {
        event.preventDefault();
        document.querySelector("#result").style.display= "block";
    }
});