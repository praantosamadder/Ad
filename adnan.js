
let widthSlider = document.getElementById("width-slider")
let heightSlider = document.getElementById("height-slider")
let innerWidth = document.getElementById("inner-width")
let innerHeight = document.getElementById("inner-height")

let outputCounter = document.getElementById("output-counter")

let w1 = 400;
let h1 = 100;
let w2 = 360;
let h2 = 60;

let currentInnerX = 40
let currentInnerY = 40

let ssss = 20


let draw = SVG().addTo("#r1").size(0.75 * screen.height, screen.width)


let rec1 = draw.rect(w1, h1).fill("#fff").move(20, 20)
rec1.stroke({color: "#000", width: 1, linecap: "round"})
let rec2 = draw.rect(w2, h2).fill("#fff").stroke("#000").move(currentInnerX, currentInnerY)

widthSlider.oninput = () => {
    document.getElementById("width-slider-pointer").innerText = widthSlider.value
    

    rec1.size(widthSlider.value, h1)
    rec2.size(widthSlider.value - (w1 - w2), h2)

    w2 = widthSlider.value - (w1 - w2)
    w1 = widthSlider.value

}

heightSlider.oninput = () => {
    document.getElementById("height-slider-pointer").innerHTML = heightSlider.value

    rec1.size(w1, heightSlider.value)
    rec2.size(w2, heightSlider.value - (h1 - h2))

    h2 = heightSlider.value - (h1 - h2)
    h1 = heightSlider.value
}

innerHeight.oninput = () => {
    document.getElementById("inner-height-pointer").innerHTML = innerHeight.value
    // change currentInnerX
    currentInnerY = ((h1 - h2) / 2) + 20
    console.log(currentInnerX)
    rec2.move(currentInnerX, currentInnerY)

    rec2.size(w2, innerHeight.value)
    h2 = innerHeight.value

}

innerWidth.oninput = () => {
    document.getElementById("inner-width-pointer").innerHTML = innerWidth.value

    // change currentInnerX
    currentInnerX = ((w1 - w2) / 2) + 20
    console.log(currentInnerX)
    rec2.move(currentInnerX, currentInnerY)

    // change inner width
    rec2.size(innerWidth.value, h2)
    w2 = innerWidth.value

}

let x = 2;

outputCounter.onkeydown = (event) => {
    if (event.key === "Enter") {
        document.getElementById("output-pointer").innerHTML = outputCounter.value

        while (x <= outputCounter.value) {
            // let r = document.createElement("div")
            // r.className = "r"
            ssss += parseInt(heightSlider.value) + 20
        
            
            let rec1 = draw.rect(w1, h1).fill("#fff").move(20, ssss)
            rec1.stroke({color: "#000", width: 1, linecap: "round"})
            let rec2 = draw.rect(w2, h2).fill("#fff").stroke("#000").move(currentInnerX, ssss + ((h1 - h2) / 2))
            
            widthSlider.oninput = () => {
                document.getElementById("width-slider-pointer").innerText = widthSlider.value
                
            
                rec1.size(widthSlider.value, h1)
                rec2.size(widthSlider.value - (w1 - w2), h2)
            
                w2 = widthSlider.value - (w1 - w2)
                w1 = widthSlider.value
            
            }

            x++
        }
    }
    
}