function Rectangle(width, height){
    this.width = width;
    this.height = height;

    this.getPerimeter = function (){
        let perimeter = (this.width + this.height)*2;
        return perimeter;
    }
    this.getArea = function (){
        let area = (this.width * this.height);
        return area;
    }
    this.getWriter = function (){
        return this.width;
    }
}
let hcn1 = new Rectangle(300 , 100);
let perimeter=hcn1.getPerimeter();
let area=hcn1.getArea();
alert('chu vi: '+perimeter+'dientich: '+area);
