//Testimonial Data
const data = [
  {
    name: "karan Dudhat",
    job: "CEO, Fashworks",
    image: "1.jpg",
    testimonial:
      "Neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur",
  },
  {
    name: "ankur Bhimani",
    job: "Developer, TechCrew",
    image: "2.jpg",
    testimonial:
      "Elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla",
  },
  {
    name: "Raj bhimani",
    job: "UI Designer, Affinity Agency",
    image: "3.jpg",
    testimonial:
      "Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis",
  },
  {
    name: "nikunj sir",
    job: "CEO,Zeal Wheels",
    image: "4.jpg",
    testimonial:
      "Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
  },
];


let i = 0;

let box = document.getElementById("box");

function next() {
  i = (data.length + i + 1) % data.length;
  abc();
};
function prev() {
  i = (data.length + i - 1) % data.length;
  abc();
};

let abc = () => {
  box.innerHTML = `
      <img src=${data[i].image}>
      <p>${data[i].testimonial}</p>
      <h3>${data[i].name}</h3>
      <h6>${data[i].job}</h6>
    `;
};
window.onload = abc;