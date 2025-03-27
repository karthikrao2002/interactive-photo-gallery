function upDate(previewPic) {
    // Change the text of the div with id "image"
    document.getElementById('image').innerHTML = previewPic.alt;
    
    // Change the background image of the div with id "image"
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    // Reset the text of the div with id "image"
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
    
    // Reset the background image of the div with id "image"
    document.getElementById('image').style.backgroundImage = "url('')";
}
