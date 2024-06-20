class Box{
    constructor(myscale,xmin,xbox,ymin,ybox){
        this.myscale = myscale;
        this.xmin = xmin;
        this.xbox = xbox;
        this.ymin = ymin;
        this.ybox = ybox;
    }

    theBox(){
        noFill();
      stroke('#000000');
      strokeWeight(3); //applies to lines and string characters
      rect(this.xmin,this.ymax, width,height);
    }
}