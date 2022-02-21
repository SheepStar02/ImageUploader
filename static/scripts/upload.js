document.onreadystatechange = function () {
    if (document.readyState === "complete"){
        ButtonPaths();
    }
}

function ButtonPaths () {
    document.querySelector("#home-button").onclick = function () {
        window.open("/", "_self");
    }

    // document.querySelector("#upload-button").onclick = function() {
    //     if (document.querySelector("#upload-button").dataset.state === "upload") {
    //         document.querySelector("#upload-button").dataset.state = "home"
    //         document.querySelector("#upload-button").textContent = "Home";
    //         document.querySelector('#home-button').style.display = "none";
    //     } else {
    //         window.open("/", "_self");
    //     }
    // }
    
    document.querySelector(".upload-button").onchange = function(event) {

        if (event.target.files.length === 0) {return}
        
        let file = URL.createObjectURL(event.target.files[0]);

        firebase.firestore().collection("ImageUploader").doc("Images").update(
            { ImageContainer : firebase.firestore.FieldValue.arrayUnion(file),},
            { merge : true }
        ).then(() => {
            document.querySelector(".image-loader").src = file;
            event.target.onclick = function (event) {
                console.log(window.open("/", "_self"));
            }
        });
    }
}