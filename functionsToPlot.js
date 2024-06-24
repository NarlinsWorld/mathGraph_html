circlemath = function () {
  //You can set the plot default parameters here, but doing so prevents changing them on screen
  //unless you use the trip variable, which is incremented at the end of fetchminmax() in library/util.js;
  //These definitions override the presets in function checkStartup() and are nice since they accompany your arithmetic.

  if (trip < 2) {
    document.getElementById('ymin').value = -12;
    document.getElementById('ymax').value = 12;
    document.getElementById('xmin').value = -12;
    document.getElementById('xmax').value = 12;
    document.getElementById('numXbox').value = 6;
    document.getElementById('numYbox').value = 12;
    document.getElementById('myScale').value = .6;
    document.getElementById('xdecimals').value = 1;
    document.getElementById('ydecimals').value = 1;
    document.getElementById('xAxisLabel').value = 'My X Axis Label';
    document.getElementById('yAxisLabel').value = 'My Y Axis Label';
  }

  let r = 10; let theta = 0; npts = 100;
  for (let i = 0; i < npts; i++) {
    theta = i * 2 * Math.PI / (npts);
    x[i] = r * cos(theta);
    y[i] = r * sin(theta);
  }
  plotxy(x, y, npts);
}

// If called, we draw a spiral.

spiral = function () {
  if (trip < 2) {
    document.getElementById('ymin').value = -12;
    document.getElementById('ymax').value = 12;
    document.getElementById('xmin').value = -12;
    document.getElementById('xmax').value = 12;
    document.getElementById('numXbox').value = 6;
    document.getElementById('numYbox').value = 10;
    document.getElementById('myScale').value = .6;
    document.getElementById('xdecimals').value = 1;
    document.getElementById('ydecimals').value = 1;
    document.getElementById('xAxisLabel').value = 'My X Axis Label';
    document.getElementById('yAxisLabel').value = 'My Y Axis Label';
  }

  let r = 0.17; let theta = 0; npts = 10000;
  for (let i = 0; i < npts; i++) {
    theta = i * 20 * Math.PI / (npts + 1);
    x[i] = -r * theta * sin(theta);
    y[i] = -r * theta * cos(theta);
  }
  plotxy(x, y, npts);
  //noLoop();  // The large number of data points makes the CPU fan come on.
}


//If Called we draw y=x^2
expmath = function (npts, xmin, xmax) {
  
  if (trip < 2) {
    document.getElementById('ymin').value = 0;
    document.getElementById('ymax').value = 100;
    document.getElementById('xmin').value = -12;
    document.getElementById('xmax').value = 12;
    document.getElementById('numXbox').value = 6;
    document.getElementById('numYbox').value = 10;
    document.getElementById('myScale').value = .6;
    document.getElementById('xdecimals').value = 0;
    document.getElementById('ydecimals').value = 0;
    document.getElementById('xAxisLabel').value = 'x-Axis';
    document.getElementById('yAxisLabel').value = 'y-Axis';
  }
  for (let i = 0; i < npts; i++) {
    x[i] = xmin + i * (xmax - xmin) / (npts + 1);
    y[i] = x[i] * x[i];
  }
  plotxy(x, y, npts);
}


// Show whatever values are in arrays x and y as point plots
plotxy = function (x, y, npts) {
  let obj1 = fetchminmax();
  let xmin = obj1[0]; let xmax = obj1[1]; let ymin = obj1[2]; let ymax = obj1[3];
  let numXbox = obj1[4]; let numYbox = obj1[5];
  //console.log("plotxy: xmin =", xmin, " xmax=", xmax, " ymin=", ymin, " ymax=", ymax);
  //console.log("plotxy: numXbox="+numXbox+" numYbox="+numYbox);
  for (let i = 0; i < npts; i++) {
    if (x[i] >= xmin && x[i] <= xmax && y[i] >= ymin && y[i] <= ymax) { //this if constrains the result to stay in the box!!!!!!!!!!!!!!!!!!
      let x1 = map(x[i], xmin, xmax, 0, width);
      let y1 = map(y[i], ymin, ymax, 0, height);

      circle(x1, y1, 5);
    }
  }
}

class Grid {
  constructor(xmin, xmax, ymin, ymax, numXbox, numYbox) {
    this.xmin = xmin;
    this.xmax = xmax;
    this.ymin = ymin;
    this.ymax = ymax;
    this.numXbox = numXbox;
    this.numYbox = numYbox;
  }

  show() {
    let obj1 = fetchminmax(); //file is util.js
    this.xmin = obj1[0];
    this.xmax = obj1[1];
    this.ymin = obj1[2];
    this.ymax = obj1[3];
    this.numXbox = obj1[4];
    this.numYbox = obj1[5];
    //console.log("show: xmin =", this.xmin, " xmax=", this.xmax, " ymin=", this.ymin, " ymax=", this.ymax, " numXbox=", this.numXbox, " numYbox=", this.numYbox);
    let delx = (this.xmax - this.xmin) / this.numXbox;
    let dely = (this.ymax - this.ymin) / this.numYbox;
    for (let i = 0; i < this.numXbox + 1; i++) {
      grid.drawVertical(this.xmin + i * delx);
    }
    for (let i = 0; i < this.numYbox + 1; i++) {
      grid.drawHorizontal(this.ymin + i * dely);
    }
  }

  drawVertical(xloc) {
    let x1 = map(xloc, this.xmin, this.xmax, 0, width);
    let y1 = map(this.ymin, this.ymin, this.ymax, 0, height);
    let x2 = x1;
    let y2 = map(this.ymax, this.ymin, this.ymax, 0, height);
    //console.log('drawVertical: (x1,y1)='+x1+','+y1);
    line(x1, y1, x2, y2);
  }

  drawHorizontal(yloc) {
    let x1 = map(this.xmin, this.xmin, this.xmax, 0, width);
    let y1 = map(yloc, this.ymin, this.ymax, 0, height);
    let x2 = map(this.xmax, this.xmin, this.xmax, 0, width);
    let y2 = y1;
    //console.log('drawHorizontal: (x1,y1)='+x1+','+y1+'  (x2,y2)='+x2+','+y2);
    line(x1, y1, x2, y2);
  }
}