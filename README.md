

# Quick View of x, y data

Purpose: To create a "nicely formatted" graph for use in powerpoint or online presentations.  By altering the onscreen html parameters,  
xmin, xmax, xbox, xdecimals  
ymin, ymax, ybox, ydecimals
xAxisLabel, yAxisLabel, and grid  
we can get the tics and number values to be pretty much exactly as desired.

The file runs through a browser opening the index.html and having all
files in the same directory, for example Directory = **'mathGraph_html'**.
The directory 'libraries' must also be in the directory **'mathGraph_html'**<br><br>

<img src="SampleRun.png">

A user must write in javascript, code for their particular xy data.
It must be placed in its own function into the file **'functionsToPlot.js'**<br>
For example, a function to graph $y=x^2$ can be written as follows.

    //x[] and y[] are global arrays for your data
    expmath = function (npts, xmin, xmax) { 
    for (let i = 0; i < npts; i++) {  
        x[i] = xmin + i * (xmax - xmin) / (npts + 1);  
        y[i] = x[i] * x[i];  
    }  
    /* plotxy(x,y,npts); is an existing function that takes the data  
    that you put into arrays x[] and y[] and translates it to be plotted  
    on an html canvas  --- You just have to call it.*/  

    plotxy(x, y, npts);  //<== This calls the existing function to show your x,y data.
    }  

<h3>Calling your function</h3>

Note that three arguments were brought in with your function call. In the example the new function was expmath(npts,xmin,xmax){}  You may include or exclude any arguments that you may desire. Typically, you might want to include xmin,xmax,ymin,ymax.  The number of points to plot are up to you and may be fixed by your routine. 

There are existing example functions in the file functionsToPlot.js.

Your function will be called from **sketch.js**. In **sketch.js** on or about line 80, put your function call.  The arguments for xmin, ymin, xmax, ymax are available to pass in with that call, if needed.  In file sketch.js, you will see a few commented out examples of other math functions.

If you would like to plot random data, go for it.  Your function routine will be much larger to fetch or create the data, but it will work. Just be sure that prior to calling plotxy(x,y,npts); that you have used javascript to fill arrays x and y with data and that they are the some size where that size is npts. 

<h3>Preset Values</h3>  

The html values are not preset in the html code.  They are set in the function **checkStartup()**, of course they can be changed on screen during program execution.  Also, the examples in functionsToPlot.js show how to set default values for your particular math function.

<h1>Files and Directories</h2>

Files Included in directory 'mathGraph_html': (clone this)<br><br>
Directory 'libraries'<br>
file:  drdrugus.ico <= a favicon<br>
file:  p5.min.js <= the p5.js library file<br>
file:  p5.sound.min.js <= not used. Could be omitted<br>
file:  util.js <= some essential utilities for the program<br>

Other files:<br>
file:  index.html   <= the html driver for everything here<br>
file:  sketch.js    <= the p5.js driver file<br>
file:  box.js   <= draws the box, tics, and labels.<br>
file:  functionsToPlot.js   <= computes (x,y) and makes the mathplot.<br>
file:  style.css <= minimal css style file<br>
file:  jsconfig.json <= a vscode file - not really needed.<br>
file:  New_html_inputs.md <= a guide to adding new interactive inputs to the html screen<br>
file:  README.md <=  the file you are reading.