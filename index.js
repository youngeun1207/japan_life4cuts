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
    if (container.childElementCount > 0) {
        container.replaceChild(newImage, container.lastElementChild);
    }
    else {
        container.appendChild(newImage);
    }
    document.getElementById("upload-button" + String(num)).style.cssText = 'opacity: 0;'
    // container.appendChild(newImage);
};

function divPrint() {
    const initBody = document.body.innerHTML;
    window.onbeforeprint = function () {
        document.body.innerHTML = document.getElementById('print-div').innerHTML;
    }
    window.onafterprint = function () {
        document.body.innerHTML = initBody;
        init();
    }
    window.print();
}

function saveImage() {
    console.log("test");
    html2canvas($("#downloadImage"), {
        useCORS: true,
        onrendered: function (canvas) {
            canvas.toBlob(function (blob) {
                saveAs(blob, 'image.png');
            });

        }
    });
}

function handleColorClick(event) {
    console.log("test");
    const color = event.target.style.backgroundColor;
    const element = document.getElementById("downloadImage");

    if (color == 'rgb(255, 255, 255)') {
        element.style.cssText = 'border : 1px; border-style: solid; border-color: #c4c4c4;';
        document.getElementById("logo-text").style.cssText = 'color: #b0b0b0';
        document.getElementById("date-text").style.cssText = 'color: #b0b0b0';
    } else {
        element.style.cssText = 'border : none';
        document.getElementById("logo-text").style.cssText = 'color: #ffffff';
        document.getElementById("date-text").style.cssText = 'color: #ffffff';
    }
    element.style.backgroundColor = color;
}

function init() {
    const saveBtn = document.getElementById('save');
    const printBtn = document.getElementById('print');
    const colorBtn = document.getElementsByClassName('color-palette');

    Array.from(colorBtn).forEach(color => color.addEventListener("click", handleColorClick));
    printBtn.addEventListener("click", divPrint);
    saveBtn.addEventListener("click", saveImage);

    let today = new Date();

    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();
    document.getElementById('date-text').innerText = year + "." + month + "." + date;
}

window.onload = function () {
    init();
}





