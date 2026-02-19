// Initialization

let checkColor = document.querySelector('#favcolor');


// correction only on mouse up or click outside then the rgb will be get
checkColor.oninput = e => {
    console.log(e.target.value);
}