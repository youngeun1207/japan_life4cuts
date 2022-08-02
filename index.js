// var submit = document.getElementById('submitButton');
// submit.onclick = showImage;     //Submit 버튼 클릭시 이미지 보여주기

// function showImage() {
//     var image_num = 'image-show' + String(num);
//     var newImage = document.getElementById(image_num).lastElementChild;
//     newImage.style.visibility = "visible";
//     document.getElementById('fileName').textContent = null;     //기존 파일 이름 지우기
//     num++;
//     if (num == 5) {
//         num = 1;
//     }
// }


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
    // container.appendChild(newImage);
};
