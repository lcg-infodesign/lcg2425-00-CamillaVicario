function setup() {
  createCanvas(windowWidth,windowHeight);
  //inserisco noLoop 
  noLoop();
}

function draw() {
  background("white");
  stroke("black");
  strokeWeight(1.5);
  // frameRate(1);
  let dimensione_iniziale= 20; 
let incremento_dimensione= 20;
let numero_quadrati= 28; 
  noFill(); 
  
 for (let i=0; i<numero_quadrati; i++) {
  //(i+1) faccio partire l'iterazione dal secondo ciclo così il primo quadrato mantiene sempre 
  //il suo centro al centron dello schermo 
  let dimensione_attuale= dimensione_iniziale + ((i+1)*incremento_dimensione);
   //Mettendo xPos a metà della larghezza della finestral vertice superiore si trova al centro della finestra 
  //sottraendogli la metà della larghezza del quadrato (quindi dimensione_attuale/2) il quadrato avrà il suo centro nel centro della finestra 
  //successivamente aggiungo random per variare tra (-30, 30) la posizione 
  let xPos= (windowWidth/2) - (dimensione_attuale/2)  + random (-30,30);
  let yPos= (windowHeight/2) - (dimensione_attuale/2)  + random (-30,30);
//questi sono i quadrati concentrici
  rect(xPos,yPos,dimensione_attuale,dimensione_attuale); 
  //questo è il quadrato che rimane sempre al centro
  rect((windowWidth/2) - (dimensione_iniziale/2),(windowHeight/2) - (dimensione_iniziale/2),dimensione_iniziale,dimensione_iniziale);
 }
 
 }