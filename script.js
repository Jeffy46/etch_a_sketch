let container = document.querySelector("#container");
const div = document.createElement("div");
container.appendChild(div);
let refresh = (dimension) =>{
    let sideLength=800/dimension;
    console.log(sideLength)
    for(let i = 0; i < dimension*dimension; i++){
        let temp = div.cloneNode();
        temp.style.width=sideLength + "px";
        temp.style.height=sideLength + "px";
        temp.classList.toggle("hoverable");
        container.append(temp);
    }
}