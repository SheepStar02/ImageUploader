document.onreadystatechange = () => {
    if (document.readyState === "complete"){
        loadDocument();
    }
}

function loadDocument () {
    document.querySelector(".buttons").onclick = function () {
        window.open("/upload", "_self");
    }
}