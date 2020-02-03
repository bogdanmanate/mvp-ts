export class Cell {
    protected isAlive: boolean;
    protected cell: SVGRectElement;

    constructor(protected canvas:SVGSVGElement, protected i:number,protected j:number) {
      this.isAlive = false;
      this.cell = this.createCell();
      this.canvas.appendChild(this.cell)
      this.draw();
    }

    public get line(): number {
        return this.i;
    }

    public get column():number {
        return this.j;
    }
    
    protected createCell() {
        const rect = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
        const x = this.i*10;
        const y = this.j*10;
        rect.setAttributeNS(null, 'x', x.toString());
        rect.setAttributeNS(null, 'y', y.toString());
        rect.setAttributeNS(null, 'height', '10');
        rect.setAttributeNS(null, 'width', '10');

        return rect;
    }
    protected draw() {
     // draw the cell according to the activeStatus
     // White - when a cell is dead
     // Red - when a cell is alive
    }
    
    public setActiveStatus(value:boolean) {
      this.isAlive = value;
      this.draw();
    }
    
    public getActiveStatus() {
      return this.isAlive;
    }
  }