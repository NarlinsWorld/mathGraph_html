/*Variables that come in from html; preset values are in function checkStartup() located in util.js 
I have gone to a lot of trouble to keep xmin,xmax,ymin,ymax as NOT global variables.
Is it worth it?
*///



let trip = 0; //accumulated in checkInput() in file util.js - used in debugging
let slowdown = true; //use for debug

function setup() {
  cvs = createCanvas(700, 600);
  cvs.parent("cvsdiv");
  let minmax = checkStartup(); //fills the array with the onscreen startup values. Only OK in setup
  let xmin = minmax[0];
  let xmax = minmax[1];
  let ymin = minmax[2];
  let ymax = minmax[3];
  let numXbox = minmax[4];
  let numYbox = minmax[5];
  let myScale = minmax[6];
  let xAxisLabel = "x-Axis Label";
  let yAxisLabel = "Label for the y-Axis";
  

  globalThis.xzero = 0; globalThis.yzero = height; //these are in canvas units, so 0 to width and 0 to height
  //create some data
  globalThis.x = []; //globals
  globalThis.y = [];
  grid = new Grid(xmin, xmax, ymin, ymax, numXbox, numYbox);
  box = new Box(myScale, xmin, xmax, numXbox, ymin, ymax, numYbox,xAxisLabel,yAxisLabel);
  // dxmax = max(x); //minmax for the dataset. Globals
  // dxmin = min(x);
  // dymax = max(y);
  // dymin = min(y);
}



function draw() {
  let obj1 = fetchminmax(); //file is util.js the function retrieves onscreen settings
  let xmin = obj1[0];
  let xmax = obj1[1];
  let ymin = obj1[2];
  let ymax = obj1[3];
  let numXbox = obj1[4];
  let numYbox = obj1[5];
  let myScale = obj1[6];
  background('#d4ffff');
  //translate (xmin,ymin) to the LL corner of box.
  push();
  let obj2;
  /*this finds a point exactly correct for scale(1,1)
  to do the graph translation. that is, we will translate(obj2[0],obj2[1])
  It will NOT get an aspect ratio of 1.
  It will assure that the plot is using the same units as xmin,xmax and ymin,ymax
  */
//  console.log(box.canvasUnits(0, 0));
  obj2 = box.canvasUnits(xmin,ymin,xmin,xmax,ymin,ymax); 

fill('red');
circle(obj2[0], obj2[1], 10);
noFill;


translate(obj2[0], obj2[1]);
scale(myScale);
scale(1, -1);

spiral(); //spiral runs noLoop() and requires to start over again. reason is to save CPU from overheating.

//circlemath();
//expmath(500, xmin, xmax); //subroutine fills arrays x and y and show them. Argument is npts
//grid.show(); //class grid in in file functionsToPlot.js
pop();

box.thebox(myScale,xmin, xmax, numXbox, ymin, ymax, numYbox);


  // if (trip == 2) {  //accumulated in checkInput() in file util.js  used to stop console for debugging
  //   console.log('trip =',trip)
  //noLoop();
  // }
}


