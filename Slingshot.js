class Slingshot{
 constructor(bodyA,bodyB){
  var options={
      bodyA:bodyA,
      bodyB:bodyB,
      length:20,
      stiffness:0.2
  }   
  this.sling=Constraint.create(options)
  World.add(world,this.sling)
 }
 display(){
  var point1=this.sling.bodyA.position
  var point2=this.sling.bodyB.position
  strokeWeight(4) 
  line(point1.x,point1.y,point2.x,point2.y)
  
 }
}