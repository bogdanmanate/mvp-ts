import { Cell } from './cell';

describe('Cell', () => {
  let svg: SVGSVGElement;
  let cell: Cell;

  beforeEach(() => {
    document.body.innerHTML =
    '<div>' +
    '  <svg id="gameCanvas" width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg"></svg>' +
    '</div>';

    svg = document.querySelector<SVGSVGElement>('#gameCanvas') as SVGSVGElement;
    cell = new Cell(svg, 1,1)
  })
  it('shold change background color to red when is alive', () => {
    cell.setActiveStatus(true);
    
    const rect: SVGRectElement = svg.children.item(0) as SVGRectElement;
    expect(rect.getAttribute("fill")).toBe("#FF0000");
  })
  it('shold change background color to white when is dead', () => {
    
    const rect: SVGRectElement = svg.children.item(0) as SVGRectElement;
    expect(svg.children.length).toBe(1);
    expect(rect.getAttribute("fill")).toBe("#FFFFFF");
  })
  
})
