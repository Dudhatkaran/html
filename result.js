function total() {
    var a = document.getElementById('input1').value;
    var b = document.getElementById('input2').value;
    var c = document.getElementById('input3').value;
    var d = document.getElementById('input4').value;
    var e = document.getElementById('input5').value;
    var f = document.getElementById('input6').value;
    var g = document.getElementById('input7').value;

    // ------------------sum-------------------

    var sum = parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d) + parseInt(e) + parseInt(f) + parseInt(g);

    // ---------------persentage------------------

    var per = sum * 100 / 700;

    // ----------------average---------------

    var avg = sum / 7;

    // ---------------pass/fail---------------

    if (a <= 33 || b <= 33 || c <= 33 || d <= 33 || e <= 33 || f <= 33 || g <= 33) {
        var result = "fail"
    }
    else {
        var result = "pass"
    }

    // -----------------grade----------------

    if (avg >= 90 && avg <= 100) {
        var grade = "A+"
    }
    else if (avg >= 80 && avg <= 90) {
        var grade = 'B+'
    }
    else if (avg >= 70 && avg <= 80) {
        var grade = 'C+'
    }
    else if (avg >= 60 && avg <= 70) {
        var grade = 'D+'
    }
    else if (avg >= 50 && avg <= 60) {
        var grade = 'E+'
    }
    else if (avg >= 40 && avg <= 50) {
        var grade = 'F+'
    }
    else if (avg >= 34 && avg <= 40) {
        var grade = 'G+'
    }
    else {
        var grade = "AtKT"
    }


    if(per>=80){
        var schoolership = "approved schoolership";
    }
    else{
        var schoolership = "not approved";
    }
     
var abc = document.getElementById("input1").value;

    if(abc <= 20){
        alert("heyyy")  ;
    }else{
        var sum = sum;
    }

    document.getElementById("h1").value = sum;
    document.getElementById("h2").value = per;
    document.getElementById("h3").value = result;
    document.getElementById("h4").value = grade;
    document.getElementById("h5").value = schoolership;

}