/*Variables that come in from html; preset values are in function checkStartup() located in util.js 
I have gone to a lot of trouble to keep xmin,xmax,ymin,ymax as NOT global variables.
Is it worth it?
*///




let trip = 0; //accumulated in checkInput() in file util.js
function setup() {
  cvs = createCanvas(400, 400);
  cvs.parent("cvsdiv");
  let minmax = checkStartup(); //fills the array with the startup values. Only OK in setup
  let xmin = minmax[0];
  let xmax = minmax[1];
  let ymin = minmax[2];
  let ymax = minmax[3];
  let numXbox = minmax[4];
  let numYbox = minmax[5];

  globalThis.xzero = 0; globalThis.yzero = height; //these are in canvas units, so 0 to width and 0 to height
  //create some data
  globalThis.x = []; //globals
  globalThis.y = [];
  //let numXbox=6; let numYbox = 13;
  grid = new Grid(xmin, xmax, ymin, ymax, numXbox, numYbox);

  // dxmax = max(x); //minmax for the dataset. Globals
  // dxmin = min(x);
  // dymax = max(y);
  // dymin = min(y);
}



function draw() {
  let obj1 = fetchminmax(); //file is util.js
  let xmin = obj1[0];
  let xmax = obj1[1];
  let ymin = obj1[2];
  let ymax = obj1[3];
  let numXbox = obj1[4];
  let numYbox = obj1[5];
  background(220);
  //translate (xmin,ymin) to the LL corner of box.
  translate(xzero, yzero);
  scale(1, -1);
  expmath(500, xmin, xmax); //subroutine fills arrays x and y and show them. Argument is npts
  grid.show(); //class grid in in file functionsToPlot.js
  drawAxes();

 
  // if (trip == 2) {  //accumulated in checkInput() in file util.js  used to stop console for debugging
  //   console.log('trip =',trip)
  //   noLoop();
  // }
}


