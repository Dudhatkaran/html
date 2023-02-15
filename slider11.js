
var img=['a.jpg','b.jpg','c.jpg','d.jpg'];
// let i=0;
// const l=img.length -1;

// const nextbtn=document.getElementById('next');
// function next(){
//     for(i=0;i<img.length;i++);
    // const imgtag=document.getElementById('img');
    // i++;
    // if(i>=l){
    //     i=3;
    // }

    // imgtag.src=img[i];
// }
// function prev(){
//     for(i=0;i<img.length;i--);
    // const imgtag=document.getElementById('img');
    // i++;
    // if(i>=l){
    //     i=3;
    // }

    // imgtag.src=img[i];
// }
let i=0;
function myslide(param){
    if(param=='next'){
        i++;
        if(i===img.length){
            i=img.length-1
        }}
        else{
            i--;
            if(i<0){
                i=0;
            }
        }
        document.getElementById('im').src=img[i];
    

}




