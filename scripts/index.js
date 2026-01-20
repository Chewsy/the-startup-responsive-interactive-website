let details = document.querySelector("details");

details.addEventListener("click", () => {
    document.querySelector("header").style.alignItems = 'flex-start';
});

document.querySelector("#convertButton").addEventListener("click", () => {
        document.querySelector("#addToLibrary").style.backgroundColor = '#ea684a';
                document.querySelector("iframe").style.opacity = '100';
});