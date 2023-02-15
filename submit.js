function submit(){
    let f_name = document.getElementById("namef").value;
    let result = f_name.toUpperCase();
    document.getElementById("fname").innerHTML = result; 
 }