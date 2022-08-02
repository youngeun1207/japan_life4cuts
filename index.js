function loadFile(input, num) {
    console.log(num);
    var file = input.files[0];
    var newImage = document.createElement("img");
    newImage.setAttribute("class", 'img');

    newImage.src = URL.createObjectURL(file);

    newImage.style.width = "1.8in";
    newImage.style.height = "1.2in";
    newImage.style.objectFit = "cover";

    var image_num = 'image-show' + String(num);
    console.log(image_num);
    var container = document.getElementById(image_num);
    if(container.childElementCount > 0){
        container.replaceChild(newImage, container.lastElementChild);
    }
    else{
        container.appendChild(newImage);
    }
    document.getElementById("upload-button" + String(num)).style.cssText= 'opacity: 0;'
    // container.appendChild(newImage);
};
