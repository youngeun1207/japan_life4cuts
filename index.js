var submit = document.getElementById('submitButton');
submit.onclick = showImage;     //Submit 버튼 클릭시 이미지 보여주기

var num = 1;

function showImage() {
    var image_num = 'image-show' + String(num);
    var newImage = document.getElementById(image_num).lastElementChild;
    newImage.style.visibility = "visible";
    document.getElementById('fileName').textContent = null;     //기존 파일 이름 지우기
    num++;
    if (num == 5) {
        num = 1;
    }
}


function loadFile(input) {
    var file = input.files[0];

    var name = document.getElementById('fileName');
    name.textContent = file.name;

    var newImage = document.createElement("img");
    newImage.setAttribute("class", 'img');

    newImage.src = URL.createObjectURL(file);

    newImage.style.width = "1.8in";
    newImage.style.height = "1.2in";
    newImage.style.visibility = "hidden";   //버튼을 누르기 전까지는 이미지 숨기기
    newImage.style.objectFit = "cover";

    var image_num = 'image-show' + String(num);
    var container = document.getElementById(image_num);
    container.appendChild(newImage);

};
