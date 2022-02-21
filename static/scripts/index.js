document.onreadystatechange = () => {
    if (document.readyState === "complete"){
        loadDocument();
    }
}

function loadDocument () {
    const firestore = firebase.firestore();
    document.querySelector(".buttons").onclick = function () {
        window.open("/upload", "_self");
    }
    firestore.collection("ImageUploader").doc("Images").get().then(data => {
        for(let image of data.data().ImageContainer) {
            let frame = document.createElement("img");
            document.querySelector("#picture-section").appendChild(frame);
            frame.src = image;
        }
    })
}