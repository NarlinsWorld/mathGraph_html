
drawAxes = function () {
  line(0, -height, 0, height);
  line(-width, 0, width, 0);
}
//


/*How to use this timer.
initiate the timer with T1 = new Timer(); //T1 is your variable
start the timer with T1.startTimer(inc); //inc is an integer in milliseconds for how often to 
update this.time.  In your routine, T1.time is the number of milliseconds since startTimer was initiated.
*/
class Timer {
  constructor() {
    this.tinit = null;
    this.si = -1; //setInterval id
    this.t = null;
    this.time = null; //the current time on this timer

  }

  startTimer(inc) {

    this.tinit = new Date();       // now tinit equals the starting moment and is not null.
    this.t = this.tinit.getTime(); // start time in milliseconds since Jan 1 1970;
    this.si = setInterval(function () {
      if (this.t != 0) {
        let d = new Date();
        let now = d.getTime();
        this.time = now - this.t;
      }
    }.bind(this), inc);
  }


}

function checkStartup() { //this is the onload function called by html
  let xmin = -12;
  let xmax = 12;
  let ymin = -10;
  let ymax = 10;
  let numXbox = 6;
  let numYbox = 10;
  let myScale = 0.6;
  document.getElementById('xmin').value = xmin; //assumes html initial values are the correct type.
  document.getElementById('xmax').value = xmax;
  document.getElementById('ymin').value = ymin;
  document.getElementById('ymax').value = ymax;
  document.getElementById('numXbox').value = numXbox;
  document.getElementById('numYbox').value = numYbox;
  document.getElementById('myScale').value = myScale;
  let minmax = [xmin, xmax, ymin, ymax, numXbox, numYbox, myScale];
  return minmax;
}

/* the function below can be called from html input using onchange("checkInput('elementID')") or oninput()
In this example, it checks that the input is a valid number. */


function checkInput(id1) {
  let text = document.getElementById(id1).value;
  //document.getElementById("demo").innerHTML = "You wrote: " + text;
  let fltn = Number(text);
  console.log('id1 is', id1, ' and fltn=', fltn);
  console.log(Number.isNaN(fltn));

  if (id1 == "xmin") {
    if (Number.isNaN(fltn)) {
      document.getElementById("demoxmin").innerHTML = id1 + " is not a valid number value.";
    } else {
      document.getElementById("demoxmin").innerHTML = "";
      let xmin = Number(document.getElementById("xmin").value);
    }
  }

  if (id1 == "xmax") {
    if (Number.isNaN(fltn)) {
      document.getElementById("demoxmax").innerHTML = id1 + " is not a valid number value.";
    } else {
      document.getElementById("demoxmax").innerHTML = "";
      let xmax = Number(document.getElementById("xmax").value);
    }
  }

  if (id1 == "ymin") {
    if (Number.isNaN(fltn)) {
      document.getElementById("demoymin").innerHTML = id1 + " is not a valid number value.";
    } else {
      document.getElementById("demoymin").innerHTML = "";
      let ymin = Number(document.getElementById("ymin").value);
    }
  }

  if (id1 == "ymax") {
    if (Number.isNaN(fltn)) {
      document.getElementById("demoymax").innerHTML = id1 + " is not a valid number value.";
    } else {
      document.getElementById("demoymax").innerHTML = "";
      let ymax = Number(document.getElementById("ymax").value);
    }
  }

  if (id1 == "numXbox") {
    if (Number.isNaN(fltn)) {
      document.getElementById("demonumXbox").innerHTML = id1 + " is not a valid number value.";
    } else {
      document.getElementById("demonumXbox").innerHTML = "";
      let numXbox = Number(document.getElementById("numXbox").value);
    }
  }

  if (id1 == "numYbox") {
    if (Number.isNaN(fltn)) {
      document.getElementById("demonumYbox").innerHTML = id1 + " is not a valid number value.";
    } else {
      document.getElementById("demonumYbox").innerHTML = "";
      let numYbox = Number(document.getElementById("numYbox").value);
    }
  }

  if (id1 == "myScale") {
    if (Number.isNaN(fltn)) {
      document.getElementById("demomyScale").innerHTML = id1 + " is not a valid number value.";
    } else {
      document.getElementById("demomyScale").innerHTML = "";
      let xmin = Number(document.getElementById("myScale").value);
    }
  }

  let obj1 = fetchminmax();
  let xmin = obj1[0]; let xmax = obj1[1]; let ymin = obj1[2]; let ymax = obj1[3]; let numXbox = obj1[4]; let numYbox = obj1[5]; let myScale = obj1[6];
  console.log("checkInput: xmin =", xmin, " xmax=", xmax, " ymin=", ymin, " ymax=", ymax, " numXbox=", numXbox, " numYbox=", numYbox, " myScale=", myScale);
  trip = trip + 1;
}

fetchminmax = function () {
  let xmin = Number(document.getElementById("xmin").value);
  let xmax = Number(document.getElementById("xmax").value);
  let ymin = Number(document.getElementById("ymin").value);
  let ymax = Number(document.getElementById("ymax").value);
  let numXbox = Number(document.getElementById("numXbox").value);
  let numYbox = Number(document.getElementById("numYbox").value);
  let myScale = Number(document.getElementById("myScale").value);
  return [xmin, xmax, ymin, ymax, numXbox, numYbox, myScale];
}

