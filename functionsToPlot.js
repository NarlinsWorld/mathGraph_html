const myObj = {
  spicnt: 0,
  circnt: 0,
  expcnt: 0,
  squcnt: 0,
  weicnt: 0,

  zeroCounters: function (id) { //zero all counters except for id
    switch (id) {
      case 'spiral1':
        //myObj.spicnt = 0;
        myObj.circnt = 0;
        myObj.expcnt = 0;
        myObj.squcnt = 0;
        myObj.weicnt = 0;
        //console.log('zeroed myObj.squcnt',myObj.squcnt)
        break;
      case 'circle1':
        myObj.spicnt = 0;
        //myObj.circnt = 0;
        myObj.expcnt = 0;
        myObj.squcnt = 0;
        myObj.weicnt = 0;
        //console.log('zeroed myObj.tricnt',myObj.tricnt)
        break;
      case 'expmath1':
        myObj.spicnt = 0;
        myObj.circnt = 0;
        //myObj.expcnt = 0;
        myObj.squcnt = 0;
        myObj.weicnt = 0;
        break;
      case 'squircle1':
        myObj.spicnt = 0;
        myObj.circnt = 0;
        myObj.expcnt = 0;
        //myObj.squcnt = 0;
        myObj.weicnt = 0;
        break;

      case 'weirestrass1':
        myObj.spicnt = 0;
        myObj.circnt = 0;
        myObj.expcnt = 0;
        myObj.squcnt = 0;
        //myObj.weicnt = 0;
        break;
      default:
      // code block
    } //end switch statement
  }, //end of zeroCounters()

  spiral: function () {
    if (myObj.spicnt < 1) {
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
      myObj.spicnt += 1;
    }
    let r = 0.17; let theta = 0; npts = 1000;
    for (let i = 0; i < npts; i++) {
      theta = i * 20 * Math.PI / (npts + 1);
      x[i] = -r * theta * sin(theta);
      y[i] = -r * theta * cos(theta);
    }
    lnplotxy(x, y);  //this one connects the dots
    document.getElementById('description').innerHTML = 'A nice spiral.';
  }, //the comma ends function spiral

  circlemath: function () {
    if (myObj.circnt < 1) {
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
      myObj.circnt += 1;
    }
    let r = 10; let theta = 0; npts = 100;
    for (let i = 0; i < npts; i++) {
      theta = i * 2 * Math.PI / (npts);
      x[i] = r * cos(theta);
      y[i] = r * sin(theta);
    }
    plotxy(x, y, npts);
    document.getElementById('description').innerHTML = '';
  }, //end if function circlemath() 

  expmath: function (npts, xmin, xmax) {
    if (myObj.expcnt < 1) {
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
      myObj.expcnt += 1;
    }
    for (let i = 0; i < npts; i++) {
      x[i] = xmin + i * (xmax - xmin) / (npts + 1);
      y[i] = x[i] * x[i];
    }
    plotxy(x, y, npts);
    document.getElementById('description').innerHTML = '';
  }, // end of function expmath()

  r: function (a) {
    let result;
    let s = 0.95;
    if (a == 0 ^ a == PI / 2) { result = 1; } else if (a == PI ^ a == 3 * PI / 2) { result = -1 } else {
      result = (cos(a) ** 2 + sin(a) ** 2
        - sqrt(-4 * s * s * cos(a) ** 2 * sin(a) ** 2 + cos(a) ** 4 + 2 * cos(a) ** 2 * sin(a) ** 2 + sin(a) ** 4))
        / (2 * s * s * cos(a) ** 2 * sin(a) ** 2);
    }
    return result;
  },

  squircle: function () {
    if (myObj.squcnt < 1) {
      document.getElementById('ymin').value = -1.5;
      document.getElementById('ymax').value = 1.5;
      document.getElementById('xmin').value = -1.5;
      document.getElementById('xmax').value = 1.5;
      document.getElementById('numXbox').value = 6;
      document.getElementById('numYbox').value = 12;
      document.getElementById('myScale').value = .6;
      document.getElementById('xdecimals').value = 1;
      document.getElementById('ydecimals').value = 1;
      document.getElementById('xAxisLabel').value = 'My X Axis Label';
      document.getElementById('yAxisLabel').value = 'My Y Axis Label';
      myObj.squcnt += 1;
    }
    let theta = 0; npts = 1000;
    for (let i = 0; i < npts; i++) {
      theta = i * 2 * Math.PI / (npts);
      x[i] = sqrt(myObj.r(theta)) * cos(theta);
      y[i] = sqrt(myObj.r(theta)) * sin(theta);
      //console.log(theta,myObj.r(theta), x[i],y[i]);
    }
    lnplotxy(x, y, npts);
    document.getElementById('description').innerHTML = 'This s-squircle can be investigated further<br> at https://www.johndcook.com/blog/2022/10/27/variant-squircle/ ';

  }, // end of function squircle()

  weierstrass: function (npts, xmin, xmax) {
    if (myObj.weicnt < 1) {
      document.getElementById('xmin').value = 0;
      document.getElementById('xmax').value = 20;
      document.getElementById('ymin').value = -1.5;
      document.getElementById('ymax').value = 1.5;
      document.getElementById('numXbox').value = 10;
      document.getElementById('numYbox').value = 6;
      document.getElementById("xdecimals").value = 0;
      document.getElementById('ydecimals').value = 1;
      myObj.weicnt += 1;
    }
    //npts needs to be at least 1000.
    for (let i = 0; i < npts; i++) {
      x[i] = i / 50;
      prod = 1;
      for (let k = 1; k < 80; k++) {
        prod = prod * (1 - x[i] * x[i] / (k * k * PI * PI));
      }
      y[i] = x[i] * prod;
    }
    lnplotxy(x, y); //alternative call to connect dots with a line

    sxy(1000, xmin, xmax);
    //if(trip>3){noLoop();}  //un-comment out this line if the computer  overheats  !!
    document.getElementById('description').innerHTML = 'Red is a real sin curve. Black is a Weierstrass sine';

  } // end of function Weierstrass()


} //end of object definition



// Sine of x
sxy = function (npts, xmin, xmax) {
  let xn = []; let yn = [];
  for (let i = 0; i < npts; i++) {
    xn[i] = xmin + i * (xmax - xmin) / (npts + 1);;
    yn[i] = sin(xn[i]);
    //console.log(x[i],y[i])
  }

  stroke('red');
  lnplotxy(xn, yn);
  stroke('black');

}

//****************************************  NOT A USER AREA BELOW HERE ************************************
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

lnplotxy = function (x, y) {
  let obj1 = fetchminmax();
  let xmin = obj1[0]; let xmax = obj1[1]; let ymin = obj1[2]; let ymax = obj1[3];
  xs = map(x[0], xmin, xmax, 0, width);
  ys = map(y[0], ymin, ymax, 0, height);
  for (let i = 1; i < x.length; i++) {
    if (x[i] >= xmin && x[i] <= xmax && y[i] >= ymin && y[i] <= ymax) { //this if constrains the result to stay in the box!!!!!!!!!!!!!!!!!!
      let x1 = map(x[i], xmin, xmax, 0, width);
      let y1 = map(y[i], ymin, ymax, 0, height);

      line(x1, y1, xs, ys);
      xs = x1;
      ys = y1;
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
    strokeWeight(.5);
    stroke('green');
    for (let i = 0; i < this.numXbox + 1; i++) {
      grid.drawVertical(this.xmin + i * delx);
    }
    for (let i = 0; i < this.numYbox + 1; i++) {
      grid.drawHorizontal(this.ymin + i * dely);
    }
    stroke('black');
    strokeWeight(1);
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