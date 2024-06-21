class Box {
    constructor(myScale, xmin, xmax, xbox, ymin, ymax, ybox, xAxisLabel, yAxisLabel) {
        this.myScale = myScale;
        this.xmin = xmin;
        this.xbox = xbox;
        this.ymin = ymin;
        this.ybox = ybox;
        this.xmax = xmax;
        this.ymax = ymax;
        this.xAxisLabel = xAxisLabel;
        this.yAxisLabel = yAxisLabel;
        this.xdecimals = 1;
        this.ydecimals = 1;
        this.fsize = 22;

        this.Middle = createVector(width / 2, height / 2);
        this.topCornerX = round(this.Middle.x - this.myScale * width / 2);
        this.topCornerY = round(this.Middle.y - this.myScale * height / 2);
        this.lowerLeft = createVector(this.topCornerX, height * this.myScale + this.topCornerY); //lower left corner
        this.rt = createVector(this.lowerLeft.x + this.myScale * width, this.lowerLeft.y); //lowr right corner 
        this.boxwidth = this.rt.x - this.lowerLeft.x;
        this.boxheight = this.lowerLeft.y - this.topCornerY;
        //this.zz = createVector();
        // this.m = (this.rt.x - this.lowerLeft.x) / (this.xmax - this.xmin);
        // this.zz.x = this.lowerLeft.x + this.m * (0 - this.xmin);
        // this.m = (this.topCornerY - this.lowerLeft.y) / (this.ymax - this.ymin);
        // this.zz.y = this.lowerLeft.y + this.m * (0 - this.ymin);
        //console.log('canvas units for LL=', this.lowerLeft)
    }

    canvasUnits(x, y, xmin, xmax, ymin, ymax) {
        //we want canvas units from mathUnits.
        let x1 = map(x, xmin, xmax, this.lowerLeft.x, this.rt.x);
        let y1 = map(y, ymin, ymax, this.lowerLeft.y, this.topCornerY);
        return [x1, y1];
    }

    thebox(myScale,xmin, xmax, xbox, ymin, ymax, ybox) {
        //if the scale changes, then these  lines need to be repeated with the new scale.
        this.Middle = createVector(width / 2, height / 2);
        this.topCornerX = round(this.Middle.x - myScale * width / 2);
        this.topCornerY = round(this.Middle.y - myScale * height / 2);
        this.lowerLeft = createVector(this.topCornerX, height * myScale + this.topCornerY); //lower left corner
        this.rt = createVector(this.lowerLeft.x + myScale * width, this.lowerLeft.y); //lowr right corner 
        this.boxwidth = this.rt.x - this.lowerLeft.x;
        this.boxheight = this.lowerLeft.y - this.topCornerY;

        push();
        //textFont(tahoma);
        textSize(this.fsize);
        noFill();
        stroke('#000000');
        strokeWeight(3); //applies to lines and tics
        rect(this.topCornerX, this.topCornerY, this.boxwidth, this.boxheight); //draws the rectangle
        fill('#000000'); //fill for tic marks

        //draw the x-axis tic marks using a for loop
        //These items don't belong in the loop    
        this.m = (this.rt.x - this.lowerLeft.x) / xbox;
        textAlign(CENTER, CENTER);
        let xnlen = numlen(xmin, xmax, xbox); // maximum xnumber length in characters - not used

        for (let i = 0; i < floor(xbox + 1); i++) {
            let tix = this.lowerLeft.x + this.m * i; //x location to begin tix
            strokeWeight(3); // Line weight
            line(tix, this.lowerLeft.y, tix, this.lowerLeft.y - 25 * myScale); // the tic line            
            let xn = xmin + i * (xmax - xmin) / xbox; //calc the tic number
            if (this.xdecimals != 0) {
                xn = xn.toFixed(this.xdecimals);
            } //does user want fixed decimal
            let xnumber = str(xn); // the string to print   
            strokeWeight(0); //text weight - we change size, not weight
            text(xnumber, tix, this.lowerLeft.y + .03 * height); //the printed tic number           
        } //end for

        //xAxisLabel, centered between lowerLeft.x and rt.x
        let len = this.xAxisLabel.length;
        strokeWeight(0);
        text(this.xAxisLabel, (this.lowerLeft.x + this.rt.x) / 2, this.lowerLeft.y + .06 * height);
        strokeWeight(3);

        //draw the y-axis tic marks
        //determine the maximum ynumber length
        textAlign(LEFT, CENTER);
        let nlen = numlen(ymin, ymax, ybox);
        this.m = (this.topCornerY - this.lowerLeft.y) / ybox;

        for (let i = 0; i < floor(ybox + 1); i++) {
            let tix = this.lowerLeft.y + this.m * i; //y location to begin tic
            strokeWeight(3);
            line(this.lowerLeft.x, tix, this.lowerLeft.x + 25 * myScale, tix); //draw the tic
            let yn = ymin + i * (ymax - ymin) / ybox //calc the tic value
            if (this.xdecimals != 0) {
                yn = yn.toFixed(this.ydecimals);
            } //if user wanted fixed decimals
            let ynumber = str(yn); //the string to print
            strokeWeight(0);
            let lineWidth = textWidth(ynumber);

            text(ynumber, this.lowerLeft.x - lineWidth * 1.2, tix + .000 * height); //the printed tic number


        } //end for loop

        //yAxisLabel
        textAlign(CENTER, CENTER); //remeber these get rotated
        len = this.yAxisLabel.length;
        let xloc = this.lowerLeft.x - (this.fsize / myScale) * 2;
        let yloc = (this.lowerLeft.y + this.topCornerY) / 2;
        push();
        translate(xloc, yloc); //translates x,y to 0,0
        rotate(-Math.PI / 2);
        strokeWeight(0);
        text(this.yAxisLabel, 0, 0);
        strokeWeight(3);
        pop();

        //slowdown = false; //only debug print for 1 set.


        //console.log('thebox: xmin='+this.xmin+' ymin='+this.ymin+' xmax='+this.xmax+' ymax='+this.ymax);
        //console.log('thebox: LL=' + x1 + ',' + y1);


        pop();
    }
}

//function to determine the maximum number length for the axes.
//nmin = xmin or ymin
//nmax = xmax or ymax
//numbox = xbox or ybox
function numlen(nmin, nmax, numbox) {
    let nlen = str(nmin).length;
    let mlen = str(nmin + floor(numbox + 1) * (nmax - nmin) / numbox).length;
    nlen = max(nlen, mlen);
    if ((nmax - nmin) % numbox === 0 && nlen > 2) {
        nlen = nlen - 2;
    }
    return nlen;
} // end numlen