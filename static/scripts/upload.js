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
    
    document.querySelector(".upload-button").onchange = function(event) {

        if (event.target.files.length === 0) {return}

        let file = event.target.files[0], url = URL.createObjectURL(file), img = new Image;

        img.src = url;
        
        img.onload = function () {
            if (Math.max(img.width, img.height) / Math.min(img.width, img.height) < 3 && Math.min(img.width, img.height) > 30){

                Reader.onloadend = function() {
                    let result = Reader.result;
        
                    firebase.firestore().collection("ImageUploader").doc("Images").update(
                        { ImageContainer : firebase.firestore.FieldValue.arrayUnion(result)},
                        { merge : true }
                    ).then(() => {
                        document.querySelector(".image-loader").src = result;
                        document.querySelector(".image-container").style.display = "block";
                        document.querySelector(".upload-button").textContent = "Home";
                        document.querySelector(".upload-button").onclick = function (event) {
                            window.open("/", "_self");
                        }
                    });
                }
        
                Reader.readAsDataURL(file);
            }
        }


    }
}