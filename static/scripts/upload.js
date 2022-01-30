document.onreadystatechange = function () {
    if (document.readyState === "complete"){
        ButtonPaths();
    }
}

function ButtonPaths () {
    document.querySelector("#home-button").onclick = function () {
        window.open("/", "_self");
    }
    document.querySelector("#upload-button").onclick = function() {
        if (document.querySelector("#upload-button").dataset.state === "upload") {
            document.querySelector("#upload-button").dataset.state = "home"
            document.querySelector("#upload-button").textContent = "Home";
            document.querySelector('#home-button').style.display = "none";
        } else {
            window.open("/", "_self");
        }
    }
}