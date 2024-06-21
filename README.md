

# Quick View of x, y data

The file runs through a browser opening the index.html and having all
files in the same directory, for example Directory = **'mathGraph_html'**.
The directory 'libraries' must also be in the directory **'mathGraph_html'**<br><br>

A user must write in javascript their particular xy data.
It must be placed as a function into the file **'functionsToPlot.js'**<br>
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

    plotxy(x, y, npts);  
    }  

<h3>Calling your function</h3>

Note that three arguments were brought in with the function call.  You may include or exclude any arguments that you may desire. Typically, you might want to include xmin,xmax,ymin,ymax.  The number of points to plot are up to you and may be fixed by your routine.  

Your function will be called from **sketch.js**. In **sketch.js** on or about line 70, put your function call.  The arguments for xmin, ymin, xmax, ymax are available to pass in with that call, if needed.  You will see a few commented out examples of other math functions.

If you would like to plot random data, go for it.  Your function routine will be much larger to fetch or create the data, but it will work.  

<h3>Preset Values</h3>  

The html values are not preset in the html code.  They are set in the function **checkStartup()**, of course they can be changed on screen during program execution.

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
file:  README.md <=  the file you are reading.