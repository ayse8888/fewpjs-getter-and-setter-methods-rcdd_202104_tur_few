// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  
   get speak() {
    return `${this.diameter} ${this.circumference} ${this.area}`;
  }
  
  set areaCircle(diameter,circumference,area) {
    this.diameter = diameter;
    this.circumference = circumference;
    this.area = area;
  }
}
 
  // let circle = new Circle(Math.PI);
  // circle