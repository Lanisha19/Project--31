class Division {
    constructor(x, y, w, h) {
     var options = {
       isStatic : true
     }
      this.body = Bodies.rectangle(x, y, w, h, options);
      this.w = width;
      this.h = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  }
