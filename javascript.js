const body = document.body;
const container = document.createElement("div");
const header = document.createElement("h1");
const clearButton = document.createElement("button");
const rainbowButton = document.createElement("button");
const blackButton = document.createElement("button");
const buttonContainer = document.createElement("buttonContainer");
const updateButton = document.createElement("button");
const darkButton = document.createElement("button");
header.innerText = "Etch-a-Sketch";
header.style.fontFamily = "Honk";
var rainbowMode = 0;
var normalMode = 1;
var darkMode = 0;
body.style.background = "linear-gradient(yellow, magenta)";
container.setAttribute("class","container");
container.style.display = "grid";
container.style.backgroundColor = "white";
container.style.width = "500px";
container.style.height = "500px";
container.style.border = "1px solid #000";
container.style.justifyContent = "center";
container.style.boxShadow = "rgba(0, 0, 0, 1) 0px 22px 70px 4px";
body.style.height = "100vh";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";

function updateGrid(numberOfSquaresPerSide) {
    container.style.gridTemplateColumns = `repeat(${numberOfSquaresPerSide}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${numberOfSquaresPerSide}, 1fr)`;
    container.innerHTML = ''; // Clear existing grid items


const totalSquares = numberOfSquaresPerSide * numberOfSquaresPerSide;
        for(let c = 1; c<= totalSquares; c++) {
            const div = document.createElement('div');
            div.className = "square";
            container.appendChild(div);        
            div.style.border = "1px solid black";
            div.style.boxSizing = "border-box";
            div.style.width = "100%";
            div.style.height = "100%";
            div.addEventListener("mouseenter", function(){
                if (darkMode === 1){
                    let currentColor = window.getComputedStyle(div).backgroundColor;
                    let rgba = currentColor.match(/rgba?\((\d+), (\d+), (\d+), ([\d.]+)\)/);            
                    if (rgba) {
                        let a = parseFloat(rgba[4]);
                        a = Math.min(a + 0.1, 1);
                        div.style.backgroundColor = `rgba(0, 0, 0, ${a})`;

                    } else {
                    div.style.backgroundColor = currentColor;
                    }     
                    
                } 
                if (normalMode === 1){
                    div.style.opacity = "100%";
                    div.style.backgroundColor = "black";
                } 
                if (rainbowMode === 1){
                    div.style.opacity = "100%";
                    div.style.backgroundColor = randomColor();
                }
              

            });
        }
    }

    body.appendChild(header);
    body.appendChild(container);
    body.appendChild(buttonContainer);
    buttonContainer.appendChild(clearButton);
    buttonContainer.appendChild(rainbowButton);
    buttonContainer.appendChild(blackButton);
    buttonContainer.appendChild(updateButton);
    buttonContainer.appendChild(darkButton);
    buttonContainer.style.width = "500px";
    buttonContainer.style.display = "flex";
    buttonContainer.style.marginTop = "50px";
    buttonContainer.style.justifyContent = "space-around";
    clearButton.innerText = "Clear";
    clearButton.style.fontSize = "22px";
    rainbowButton.innerText = "Rainbow";
    rainbowButton.style.fontSize = "22px";
    updateButton.innerText = "Update";
    updateButton.style.fontSize = "22px";
    blackButton.innerText = "Black";
    blackButton.style.fontSize = "22px";
    darkButton.innerText = "Dark Effect";
    darkButton.style.fontSize = "22px";
    clearButton.addEventListener("click", function(){
        clear();
    })
    rainbowButton.addEventListener("click", function(){
        rainbow();
    })
    blackButton.addEventListener("click", function(){
        black();
    })
    updateButton.addEventListener("click", function(){        
        while(true){
            var numberOfSquaresPerSide = parseInt(prompt("Numero de Quadrados"));
            if (isNaN(numberOfSquaresPerSide) || numberOfSquaresPerSide < 1 || numberOfSquaresPerSide > 100) {
                alert("Please enter a number between 1 and 100.");
                continue;
            }
            break;
    }
        updateGrid(numberOfSquaresPerSide);
    })

    darkButton.addEventListener("click", function(){
        dark();
    })
    header.style.textAlign = "center";
    header.style.fontSize = "64px";

function clear () {
    var divs = document.getElementsByClassName("square");
    for (i = 0; i < divs.length; i++){
        var div = divs[i];
        div.style.backgroundColor = "rgba(255,255,255,0)";
        
    }
}

function randomColor(){
    let color = [];
    for (i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
}

function rainbow(){
    rainbowMode = 1;
    normalMode = 0;
    darkMode = 0;
}

function black(){
    normalMode = 1;
    rainbowMode = 0;
    darkMode = 0;
}

function dark(){
    darkMode = 1;
    rainbowMode = 0;
    normalMode = 0;
}

updateGrid(16);