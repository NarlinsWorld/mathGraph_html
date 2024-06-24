
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
  let xdecimals = 1;
  let ydecimals = 2;
  let xAxisLabel = "X Axis Label";
  let yAxisLabel = "A Label for the y-Axis"
  document.getElementById('xmin').value = xmin; //assumes html initial values are the correct type.
  document.getElementById('xmax').value = xmax;
  document.getElementById('ymin').value = ymin;
  document.getElementById('ymax').value = ymax;
  document.getElementById('numXbox').value = numXbox;
  document.getElementById('numYbox').value = numYbox;
  document.getElementById('myScale').value = myScale;
  document.getElementById('xdecimals').value = xdecimals;
  document.getElementById('ydecimals').value = ydecimals;
  document.getElementById('xAxisLabel').value = xAxisLabel;
  document.getElementById('yAxisLabel').value = yAxisLabel;
  let minmax = [xmin, xmax, ymin, ymax, numXbox, numYbox, myScale, xdecimals, ydecimals, xAxisLabel, yAxisLabel];
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
      //document.getElementById("demoxmin").innerHTML = id1 + " is not a valid number value.";
      alert(id1+" is not a valid number");
    } else {
      document.getElementById("demoxmin").innerHTML = "";
      let xmin = Number(document.getElementById("xmin").value);
    }
  }

  if (id1 == "xmax") {
    if (Number.isNaN(fltn)) {
      //document.getElementById("demoxmax").innerHTML = id1 + " is not a valid number value.";
      alert(id1+" is not a valid number");
    } else {
      document.getElementById("demoxmax").innerHTML = "";
      let xmax = Number(document.getElementById("xmax").value);
    }
  }

  if (id1 == "ymin") {
    if (Number.isNaN(fltn)) {
      //document.getElementById("demoymin").innerHTML = id1 + " is not a valid number value.";
      alert(id1+" is not a valid number");
    } else {
      document.getElementById("demoymin").innerHTML = "";
      let ymin = Number(document.getElementById("ymin").value);
    }
  }

  if (id1 == "ymax") {
    if (Number.isNaN(fltn)) {
      //document.getElementById("demoymax").innerHTML = id1 + " is not a valid number value.";
      alert(id1+" is not a valid number");
    } else {
      document.getElementById("demoymax").innerHTML = "";
      let ymax = Number(document.getElementById("ymax").value);
    }
  }

  if (id1 == "numXbox") {
    if (Number.isNaN(fltn)) {
      //document.getElementById("demonumXbox").innerHTML = id1 + " is not a valid number value.";
      alert(id1+" is not a valid number");
    } else {
      document.getElementById("demonumXbox").innerHTML = "";
      let numXbox = Number(document.getElementById("numXbox").value);
    }
  }

  if (id1 == "numYbox") {
    if (Number.isNaN(fltn)) {
      //document.getElementById("demonumYbox").innerHTML = id1 + " is not a valid number value.";
      alert(id1+" is not a valid number");
    } else {
      document.getElementById("demonumYbox").innerHTML = "";
      let numYbox = Number(document.getElementById("numYbox").value);
    }
  }

  if (id1 == "myScale") {
    if (Number.isNaN(fltn)) {
      //document.getElementById("demomyScale").innerHTML = id1 + " is not a valid number value.";
      alert(id1+" is not a valid number");
    } else {
      document.getElementById("demomyScale").innerHTML = "";
      let myScale = Number(document.getElementById("myScale").value);
    }
  }

  if (id1 == "xdecimals") {
    if (Number.isNaN(fltn)) {
      //document.getElementById("demoxdecimals").innerHTML = id1 + " is not a valid number value.";
      alert(id1+" is not a valid number");
    } else {
      document.getElementById("demoxdecimals").innerHTML = "";
      let xdecimals = Number(document.getElementById("xdecimals").value);
    }
  }

  if (id1 == "ydecimals") {
    if (Number.isNaN(fltn)) {
      //document.getElementById("demoydecimals").innerHTML = id1 + " is not a valid number value.";
      alert(id1+" is not a valid number");
    } else {
      document.getElementById("demoydecimals").innerHTML = "";
      let ydecimals = Number(document.getElementById("ydecimals").value);
    }
  }

  let obj1 = fetchminmax();
  let xmin = obj1[0]; let xmax = obj1[1]; let ymin = obj1[2]; let ymax = obj1[3]; let numXbox = obj1[4]; let numYbox = obj1[5]; let myScale = obj1[6];
  let xdecimals = obj1[7]; let ydecimals = obj1[8];
  console.log("checkInput: xmin =", xmin, " xmax=", xmax, " ymin=", ymin, " ymax=", ymax,
    " numXbox=", numXbox, " numYbox=", numYbox, " myScale=", myScale, " xdecimals=", xdecimals, "ydecimals=", ydecimals);
  trip = trip + 1; //used to count changes in the inputs
}

fetchminmax = function () {
  let xmin = Number(document.getElementById("xmin").value); //[0]
  let xmax = Number(document.getElementById("xmax").value); //[1]
  let ymin = Number(document.getElementById("ymin").value); //[2]
  let ymax = Number(document.getElementById("ymax").value); //[3]
  let numXbox = Number(document.getElementById("numXbox").value); //[4]
  let numYbox = Number(document.getElementById("numYbox").value); //[5]
  let myScale = Number(document.getElementById("myScale").value); //[6]
  let xdecimals = Number(document.getElementById("xdecimals").value); //[7]
  let ydecimals = Number(document.getElementById("ydecimals").value); //[8]
  let xAxisLabel = document.getElementById("xAxisLabel").value;
  let yAxisLabel = document.getElementById("yAxisLabel").value;
  trip = trip+1;
  return [xmin, xmax, ymin, ymax, numXbox, numYbox, myScale, xdecimals, ydecimals, xAxisLabel, yAxisLabel];
}

