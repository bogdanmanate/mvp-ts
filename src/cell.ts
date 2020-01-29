export class Cell {
    protected isAlive: boolean;
    protected cell: SVGRectElement;

    constructor(protected canvas:SVGSVGElement, protected i:number,protected j:number) {
      this.isAlive = false;
      this.cell = this.createCell();
      this.canvas.appendChild(this.cell)
      this.draw();
    }
    
    protected createCell() {
        const rect = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
        const x = this.i*10;
        const y = this.j*10;
        rect.setAttributeNS(null, 'x', x.toString());
        rect.setAttributeNS(null, 'y', y.toString());
        rect.setAttributeNS(null, 'height', '10');
        rect.setAttributeNS(null, 'width', '10');
        rect.setAttributeNS(null, 'fill', '#'+Math.round(0xffffff * Math.random()).toString(16));

        return rect;
    }
    protected draw() {
      if (this.isAlive) {
        this.cell.setAttributeNS(null, 'fill', '#FF0000');
      } else {
        this.cell.setAttributeNS(null, 'fill', '#FFFFFF');
      }
    }
    
    public setActiveStatus(value:boolean) {
      this.isAlive = value;
      this.draw();
    }
    
    public getActiveStatus() {
      return this.isAlive;
    }
  }