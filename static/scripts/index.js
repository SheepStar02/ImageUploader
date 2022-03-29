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
        data.data().ImageContainer.forEach((image, index, container) => {
            let oframe = document.createElement("div");
            let frame = document.createElement("img");
            oframe.appendChild(frame);
            oframe.classList.add("biggerframe");
            frame.src = image;
            document.querySelectorAll("#inner-picture-cont")[index%3].appendChild(oframe);
        })
    })
}