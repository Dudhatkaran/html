var img = [];
var i = 0;

function slide_pre() {
    i--;
    if (i < 0) {
        i = img.length - 1;
    }
    document.getElementById('im').src = `./image/${img[i]}`;
}

function slide_next() {
    i++;
    if (i == img.length) {
        i = 0;
    }
    document.getElementById('im').src = `./image/${img[i]}`;
}
