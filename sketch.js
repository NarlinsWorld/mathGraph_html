/*Variables that come in from html; preset values are in function checkStartup() located in util.js 
I have gone to a lot of trouble to keep xmin,xmax,ymin,ymax as NOT global variables.
Is it worth it?
*///



let trip = 0; //accumulated in  fetchminmax() in file util.js - used to count html input changes
let slowdown = true; //use for debug
//globalThis.cnt = -1;

function setup() {
  cvs = createCanvas(700, 700);
  cvs.parent("cvsdiv");
  let minmax = checkStartup(); //fills the array with the onscreen startup values. Only OK in setup
  let xmin = minmax[0];
  let xmax = minmax[1];
  let ymin = minmax[2];
  let ymax = minmax[3];
  let numXbox = minmax[4];
  let numYbox = minmax[5];
  let myScale = minmax[6];
  let xdecimals = minmax[7]
  let ydecimals = minmax[8]
  let xAxisLabel = minmax[9];
  let yAxisLabel = minmax[10];


  //globalThis.xzero = 0; globalThis.yzero = height; //these are in canvas units, so 0 to width and 0 to height
  //create some data
  globalThis.x = []; //globals
  globalThis.y = [];
  grid = new Grid(xmin, xmax, ymin, ymax, numXbox, numYbox);
  box = new Box(myScale, xmin, xmax, numXbox, ymin, ymax, numYbox, xdecimals, ydecimals, xAxisLabel, yAxisLabel);
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
  let xdecimals = obj1[7];
  let ydecimals = obj1[8]
  let xAxisLabel = obj1[9];
  let yAxisLabel = obj1[10];

  background('#ffffff');
  //translate (xmin,ymin) to the LL corner of box.
  push();
  let obj2;
  /*obj2 finds a point exactly correct for scale(1,1)
  to do the graph translation. that is, we will translate(obj2[0],obj2[1])
  It will assure that the plot is using the same units as xmin,xmax and ymin,ymax
  */
  obj2 = box.canvasUnits(xmin, ymin, xmin, xmax, ymin, ymax);
  translate(obj2[0], obj2[1]);
  scale(myScale);
  scale(1, -1);

  exampleDisplays(xmin,xmax);
  // **********************************************************************************************************
  //In this section, call your math routine. It can be written in 'functionsToPlot.js'

  // call your function that fills global array x and global array y here.

 
  pop();

  //box.thebox() puts everything on screen except for your math function.
  box.thebox(myScale, xmin, xmax, numXbox, ymin, ymax, numYbox, xdecimals, ydecimals, xAxisLabel, yAxisLabel);


  // if (trip == 2) {  //accumulated in checkInput() in file util.js  can be used to stop console for debugging
  //   console.log('trip =',trip)
  //noLoop();
  // }
}

function exampleDisplays(xmin, xmax) {
  if (document.getElementById('spiral').checked) {
    myObj.spiral();
    myObj.zeroCounters('spiral1')
    document.getElementById('demo').innerHTML = "myObj.spicnt: " + str(myObj.spicnt);
  }

  if (document.getElementById('circle').checked) {
    myObj.circlemath();
    myObj.zeroCounters('circle1')
    document.getElementById('demo').innerHTML = "myObj.circnt: " + str(myObj.circnt);
  }

  if (document.getElementById('expmath').checked) {
    myObj.expmath(1000, -15, 15);
    myObj.zeroCounters('expmath1')
    document.getElementById('demo').innerHTML = "myObj.expcnt: " + str(myObj.expcnt);
  }

  if (document.getElementById('squircle').checked) {
    myObj.squircle();
    myObj.zeroCounters('squircle1')
    document.getElementById('demo').innerHTML = "myObj.squcnt: " + str(myObj.squcnt);
  }

  if (document.getElementById('Weierstrass').checked) {
    myObj.weierstrass(1000, xmin, xmax);
    myObj.zeroCounters('weierstrass1')
    document.getElementById('demo').innerHTML = "myObj.weicnt: " + str(myObj.weicnt);
  }


  /* ******************************************************************************************************** */
  if (document.getElementById('showgrid').checked) {
    ;
    //console.log(document.getElementById('showgrid').value);
    grid.show(); //class grid in in file functionsToPlot.js
  }
  } //end function exampleDisplays()