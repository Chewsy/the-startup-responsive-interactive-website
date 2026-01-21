let details = document.querySelector("details");

details.addEventListener("click", () => {
    document.querySelector("header").style.alignItems = 'flex-start';
});

document.querySelector("#convertButton").addEventListener("click", () => {
    document.querySelector("#addToLibrary").classList.add("active");

    // document.querySelector("#addToLibrary").style.backgroundColor = '#ea684a';
    document.querySelector("iframe").style.opacity = '100';
    // document.querySelector("#convertButton").style.backgroundColor = '#42434d';
});