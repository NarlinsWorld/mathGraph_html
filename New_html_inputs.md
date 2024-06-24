# Add New HTML Input Boxes  

This is some code information about how to modify the program to get new html input boxes. In this case, I will outline the process for getting the x-Axis-Title such that it is changeable onscreen.  Although this feature is already included, it will serve as a guide for how to create new html input.  

1. In the file **index.html**, add the input box and its label.  

```html
    <label for="xAxisLabel1">Scale:</label>
    <input type="text" id="xAxisLabel" name="xAxisLabel1" size="30" onchange="checkInput('xAxisLabel')">
```

2. In the function checkStartup() (in the library file util.js) we need to add the initialization value.  This is done in 3 places in that routine. The first time initializes the variable. The second time sets its value in html.  The third time includes in the array name minmax, which allows it to communicate easily with p5.js.

```html
function checkStartup() { //this is the onload function called by html
  let xmin = -12;
  let xmax = 12;
  let ymin = -10;
  let ymax = 10;
  let numXbox = 6;
  let numYbox = 10;
  let myScale = 0.6;
  let xAxisLabel = "x-Axis Label";
  document.getElementById('xmin').value = xmin; //assumes html initial values are the correct type.
  document.getElementById('xmax').value = xmax;
  document.getElementById('ymin').value = ymin;
  document.getElementById('ymax').value = ymax;
  document.getElementById('numXbox').value = numXbox;
  document.getElementById('numYbox').value = numYbox;
  document.getElementById('myScale').value = myScale;
  document.getElementById('xAxisLabel').value = xAxisLabel;
  let minmax = [xmin, xmax, ymin, ymax, numXbox, numYbox, myScale,xAxisLabel];
  return minmax;
}
```html

3. In the function setup() located in file sketch.js, we need to add the xAxisLabel line which closes the loop for p5.js communicating with html. I have shown the first few lines of setup, including the one that we have added to initialize xAxisLabel.

```html
function setup() {
  cvs = createCanvas(700, 600);
  cvs.parent("cvsdiv");
  let minmax = checkStartup(); //fills the array with the onscreen startup values. Do not call this routine except from setup();
  let xmin = minmax[0];
  let xmax = minmax[1];
  let ymin = minmax[2];
  let ymax = minmax[3];
  let numXbox = minmax[4];
  let numYbox = minmax[5];
  let myScale = minmax[6];
  let xAxisLabel = minmax[7];
  ```
That completes the additions needed to get the label displayed and correctly plotted, but only the first time.  Now we need to add some code lines so that it can be changed onscreen interactively.

4. If the new value was a number, we would need to modify **checkInput()**, which would mean copying a paragraph of code and altering it to assure that the new value is numeric.  As it happens, this value is string data, so that isn't needed.

5. In the library file, util.js, we need to alter function fetchminmax() which is part of the communication between html and javascript.  We need to ad the line:
```html
let xAxisLabel = document.getElementById("xAxisLabel").value;
```

We also need to extend the next line such that it includes xAxisLabel.
```html
return [xmin, xmax, ymin, ymax, numXbox, numYbox, myScale,xAxisLabel];
```
This allows the draw routine (which runs in a constant loop) to access any screen updates from the user.

6. In the draw() routine of file sketch.js, we have to assure that the new xAxisLabel has been obtained correctly from fetchminmax();

```html
function draw() {
  let obj1 = fetchminmax(); //file is util.js the function retrieves onscreen settings
  let xmin = obj1[0];
  let xmax = obj1[1];
  let ymin = obj1[2];
  let ymax = obj1[3];
  let numXbox = obj1[4];
  let numYbox = obj1[5];
  let myScale = obj1[6];
  let xAxisLabel = obj1[7];
  ```
  7. Also in draw(), where the class method thebox() is called, we need to add in this new variable.
  ```html
  box.thebox(myScale,xmin, xmax, numXbox, ymin, ymax, numYbox, xAxisLabel);
  ```

  8. Finally, since in this case the addition is to a method of the class Box, we need to assure that it is included as an argument and that the argument is used within the method's code.  Here I am only showing how to get it into the method.  Thisis just the first line of method thebox();

```html
  thebox(myScale,xmin, xmax, xbox, ymin, ymax, ybox,xAxisLabel) {
```
