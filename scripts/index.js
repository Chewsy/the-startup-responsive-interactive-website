let details = document.querySelector("details");

details.addEventListener("click", () => {
    document.querySelector("header").style.alignItems = 'flex-start';
});

document.querySelector("#convertButton").addEventListener("click", function (event) {
    event.preventDefault()
    document.querySelector("#addToLibrary").classList.add("active");
    document.querySelector("iframe").style.opacity = '100';
});