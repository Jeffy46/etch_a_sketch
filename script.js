let container = document.querySelector("#container");
const div = document.createElement("div");
let opacity=0.3;


let refresh = (dimension) =>{
    let sideLength=800/dimension;
    for(let i = 0; i < dimension*dimension; i++){
        let temp = div.cloneNode();
        temp.addEventListener("mouseover", () =>{
            temp.style.backgroundColor=getRandomColor();
            opacity+=0.05;
            temp.style.opacity=opacity;
            if(Math.floor(opacity)==1){
                opacity=0.3;
            }
            
        }) 
        temp.style.width=sideLength + "px";
        temp.style.height=sideLength + "px";
        container.append(temp);
    }
}
let newDimensions=(dimension)=>{
    container.innerHTML="";
    refresh(dimension);
}
let getRandomColor=()=> {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
