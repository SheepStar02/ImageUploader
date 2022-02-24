const Reader = new FileReader();

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

        let file = event.target.files[0];

        Reader.onloadend = function() {
            let result = Reader.result;

            firebase.firestore().collection("ImageUploader").doc("Images").update(
                { ImageContainer : firebase.firestore.FieldValue.arrayUnion(result)},
                { merge : true }
            ).then(() => {
                document.querySelector(".image-loader").src = result;
                event.target.onclick = function (event) {
                    console.log(window.open("/", "_self"));
                }
            });
        }

        Reader.readAsDataURL(file);
    }
}