var lista = [];
estatus = false;

function preload(){
    img = loadImage("prueba.webp");
}

function setup(){
    canvas = createCanvas(600, 400);
    canvas.center();
    modelo = ml5.objectDetector("cocossd", modelolisto);
    img.resize(600, 400);
}

function draw(){
    image(img, 0, 0, 600, 400);
    if (estatus) {
        for (var contador = 0; contador<lista.length; contador = contador + 1){
            noFill();
            stroke("red");
            strokeWeight(5);
            var objeto = lista[contador];
            rect(objeto.x, objeto.y, objeto.width, objeto.height);
            fill("black");
            noStroke();
            texto = objeto.label + " " + Math.round(objeto.confidence * 100) + "%";
            text(texto, objeto.x, objeto.y);
            textSize(15);
        }
        document.getElementById("detec").innerHTML = lista.length + " Objetos detectados";
    }
}

function modelolisto(){
    console.log("Modelo listo");
    modelo.detect(img, mostrar);
}

function mostrar(error, resultado){
    if (!error){
        console.log(resultado);
        estatus = true;
        lista = resultado;
    }
}
