function relo() {
    window.location.reload(true)
}

sum = 0;
var c1, c2, c3, c4, c5, c6, c7, c8, c9, c10;
function vale() {
    c1 = document.getElementById('ch_1').value;
    c2 = document.getElementById('ch_2').value;
    c3 = document.getElementById('ch_3').value;
    c4 = document.getElementById('ch_4').value;
    c5 = document.getElementById('ch_5').value;
    c6 = document.getElementById('ch_6').value;
    c7 = document.getElementById('ch_7').value;
    c8 = document.getElementById('ch_8').value;
    c9 = document.getElementById('ch_9').value;
    c10 = document.getElementById('ch_10').value;
}
let p1;
function click_1() {
    vale();
    var cc_1 = document.getElementById("ch_1");
    if (cc_1.checked == true) {
        sum = parseInt(sum) + parseInt(c1);
        document.getElementById('total').value = sum;
        document.getElementById('c_1').innerHTML = 'Your select';
    }
    else {
        sum = parseInt(sum) + parseInt(c1);
        document.getElementById('total').value = sum;
        document.getElementById('c_1').innerHTML = 'Your select';
    }
}
let p11;
function click_11() {
    vale();
    var cc_1 = document.getElementById("ch_1");
    if (cc_1.checked == true) {
        sum = parseInt(sum) - parseInt(c1);
        document.getElementById('total').value = sum;
        document.getElementById('c_1').innerHTML = 'Your remove';
    }
    else {
        sum = parseInt(sum) - parseInt(c1);
        document.getElementById('total').value = sum;
        document.getElementById('c_1').innerHTML = 'Your remove';
    }
}

let p2;
function click_2() {
    vale();
    var cc_2 = document.getElementById("ch_2");
    if (cc_2.checked == true) {
        sum = parseInt(sum) + parseInt(c2);
        document.getElementById('total').value = sum;
        document.getElementById('c_2').innerHTML = 'Your select';
    }
    else {
        sum = parseInt(sum) + parseInt(c2);
        document.getElementById('total').value = sum;
        document.getElementById('c_2').innerHTML = 'Your select';
    }
}
let p22;
function click_22() {
    vale();
    var cc_2 = document.getElementById("ch_2");
    if (cc_2.checked == true) {
        sum = parseInt(sum) - parseInt(c2);
        document.getElementById('total').value = sum;
        document.getElementById('c_2').innerHTML = 'Your remove';
    }
    else {
        sum = parseInt(sum) - parseInt(c2);
        document.getElementById('total').value = sum;
        document.getElementById('c_2').innerHTML = 'Your remove';
    }
}

let p3;
function click_3() {
    vale();
    var cc_3 = document.getElementById("ch_3");
    if (cc_3.checked == true) {
        sum = parseInt(sum) + parseInt(c3);
        document.getElementById('total').value = sum;
        document.getElementById('c_3').innerHTML = 'Your select';
    }
    else {
        sum = parseInt(sum) + parseInt(c3);
        document.getElementById('total').value = sum;
        document.getElementById('c_3').innerHTML = 'Your select';
    }
}
let p33;
function click_33() {
    vale();
    var cc_3 = document.getElementById("ch_3");
    if (cc_3.checked == true) {
        sum = parseInt(sum) - parseInt(c3);
        document.getElementById('total').value = sum;
        document.getElementById('c_3').innerHTML = 'Your remove';
    }
    else {
        sum = parseInt(sum) - parseInt(c3);
        document.getElementById('total').value = sum;
        document.getElementById('c_3').innerHTML = 'Your remove';
    }
}

let p4;
function click_4() {
    vale();
    var cc_4 = document.getElementById("ch_4");
    if (cc_4.checked == true) {
        sum = parseInt(sum) + parseInt(c4);
        document.getElementById('total').value = sum;
        document.getElementById('c_4').innerHTML = 'Your select';
    }
    else {
        sum = parseInt(sum) + parseInt(c4);
        document.getElementById('total').value = sum;
        document.getElementById('c_4').innerHTML = 'Your select';
    }
}
let p44;
function click_44() {
    vale();
    var cc_4 = document.getElementById("ch_4");
    if (cc_4.checked == true) {
        sum = parseInt(sum) - parseInt(c4);
        document.getElementById('total').value = sum;
        document.getElementById('c_4').innerHTML = 'Your remove';
    }
    else {
        sum = parseInt(sum) - parseInt(c4);
        document.getElementById('total').value = sum;
        document.getElementById('c_4').innerHTML = 'Your remove';
    }
}

let p5;
function click_5() {
    vale();
    var cc_5 = document.getElementById("ch_5");
    if (cc_5.checked == true) {
        sum = parseInt(sum) + parseInt(c5);
        document.getElementById('total').value = sum;
        document.getElementById('c_5').innerHTML = 'Your select';
    }
    else {
        sum = parseInt(sum) + parseInt(c5);
        document.getElementById('total').value = sum;
        document.getElementById('c_5').innerHTML = 'Your select';
    }
}
let p55;
function click_55() {
    vale();
    var cc_5 = document.getElementById("ch_5");
    if (cc_5.checked == true) {
        sum = parseInt(sum) - parseInt(c5);
        document.getElementById('total').value = sum;
        document.getElementById('c_5').innerHTML = 'Your remove';
    }
    else {
        sum = parseInt(sum) - parseInt(c5);
        document.getElementById('total').value = sum;
        document.getElementById('c_5').innerHTML = 'Your remove';
    }
}

let p6;
function click_6() {
    vale();
    var cc_6 = document.getElementById("ch_6");
    if (cc_6.checked == true) {
        sum = parseInt(sum) + parseInt(c6);
        document.getElementById('total').value = sum;
        document.getElementById('c_6').innerHTML = 'Your select';
    }
    else {
        sum = parseInt(sum) + parseInt(c6);
        document.getElementById('total').value = sum;
        document.getElementById('c_6').innerHTML = 'Your select';
    }
}
let p66;
function click_66() {
    vale();
    var cc_6 = document.getElementById("ch_6");
    if (cc_6.checked == true) {
        sum = parseInt(sum) - parseInt(c6);
        document.getElementById('total').value = sum;
        document.getElementById('c_6').innerHTML = 'Your remove';
    }
    else {
        sum = parseInt(sum) - parseInt(c6);
        document.getElementById('total').value = sum;
        document.getElementById('c_6').innerHTML = 'Your remove';
    }
}

let p7;
function click_7() {
    vale();
    var cc_7 = document.getElementById("ch_7");
    if (cc_7.checked == true) {
        sum = parseInt(sum) + parseInt(c7);
        document.getElementById('total').value = sum;
        document.getElementById('c_7').innerHTML = 'Your select';
    }
    else {
        sum = parseInt(sum) + parseInt(c7);
        document.getElementById('total').value = sum;
        document.getElementById('c_7').innerHTML = 'Your select';
    }
}
let p77;
function click_77() {
    vale();
    var cc_7 = document.getElementById("ch_7");
    if (cc_7.checked == true) {
        sum = parseInt(sum) - parseInt(c7);
        document.getElementById('total').value = sum;
        document.getElementById('c_7').innerHTML = 'Your remove';
    }
    else {
        sum = parseInt(sum) - parseInt(c7);
        document.getElementById('total').value = sum;
        document.getElementById('c_7').innerHTML = 'Your remove';
    }
}

let p8;
function click_8() {
    vale();
    var cc_8 = document.getElementById("ch_8");
    if (cc_8.checked == true) {
        sum = parseInt(sum) + parseInt(c8);
        document.getElementById('total').value = sum;
        document.getElementById('c_8').innerHTML = 'Your select';
    }
    else {
        sum = parseInt(sum) + parseInt(c8);
        document.getElementById('total').value = sum;
        document.getElementById('c_8').innerHTML = 'Your select';
    }
}
let p88;
function click_88() {
    vale();
    var cc_8 = document.getElementById("ch_8");
    if (cc_8.checked == true) {
        sum = parseInt(sum) - parseInt(c8);
        document.getElementById('total').value = sum;
        document.getElementById('c_8').innerHTML = 'Your remove';
    }
    else {
        sum = parseInt(sum) - parseInt(c8);
        document.getElementById('total').value = sum;
        document.getElementById('c_8').innerHTML = 'Your remove';
    }
}

let p9;
function click_9() {
    vale();
    var cc_9 = document.getElementById("ch_9");
    if (cc_9.checked == true) {
        sum = parseInt(sum) + parseInt(c9);
        document.getElementById('total').value = sum;
        document.getElementById('c_9').innerHTML = 'Your select';
    }
    else {
        sum = parseInt(sum) + parseInt(c9);
        document.getElementById('total').value = sum;
        document.getElementById('c_9').innerHTML = 'Your select';
    }
}
let p99;
function click_99() {
    vale();
    var cc_9 = document.getElementById("ch_9");
    if (cc_9.checked == true) {
        sum = parseInt(sum) - parseInt(c9);
        document.getElementById('total').value = sum;
        document.getElementById('c_9').innerHTML = 'Your remove';
    }
    else {
        sum = parseInt(sum) - parseInt(c9);
        document.getElementById('total').value = sum;
        document.getElementById('c_9').innerHTML = 'Your remove';
    }
}

let p10;
function click_10() {
    vale();
    var cc_10 = document.getElementById("ch_10");
    if (cc_10.checked == true) {
        sum = parseInt(sum) + parseInt(c10);
        document.getElementById('total').value = sum;
        document.getElementById('c_10').innerHTML = 'Your select';
    }
    else {
        sum = parseInt(sum) + parseInt(c10);
        document.getElementById('total').value = sum;
        document.getElementById('c_10').innerHTML = 'Your select';
    }
}
let p1010;
function click_1010() {
    vale();
    var cc_10 = document.getElementById("ch_10");
    if (cc_10.checked == true) {
        sum = parseInt(sum) - parseInt(c10);
        document.getElementById('total').value = sum;
        document.getElementById('c_10').innerHTML = 'Your remove';
    }
    else {
        sum = parseInt(sum) - parseInt(c10);
        document.getElementById('total').value = sum;
        document.getElementById('c_10').innerHTML = 'Your remove';
    }
}



function GST(){
    var sum = document.getElementById("total").value;
    let gstt=parseInt(sum)*18/100;
    let g=parseInt(sum)+parseInt(gstt);
    document.getElementById('gst').value=g;
}