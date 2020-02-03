import { Cell } from './cell';
import { Matrix } from './game';
import { HealthChecker } from './health-checker';



describe('Health Checker', () => {
  let svg: SVGSVGElement;
  let matrix: Matrix;
  const healthChecker: HealthChecker = new HealthChecker();
  let targetCell :Cell;
  beforeAll(() => {
    document.body.innerHTML =
    '<div>' +
    '  <svg id="gameCanvas" width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg"></svg>' +
    '</div>';

    svg = document.querySelector<SVGSVGElement>('#gameCanvas') as SVGSVGElement;
  })
  describe('for alive cell', () => {
    beforeEach(() => {
      
      matrix = [
        [new Cell(svg, 0,0),new Cell(svg, 0,1),new Cell(svg, 0,2)],
        [new Cell(svg, 1,0),new Cell(svg, 1,1),new Cell(svg, 1,2)],
        [new Cell(svg, 2,0),new Cell(svg, 2,1),new Cell(svg, 2,2)],
      ]
      targetCell = matrix[1][1];
      targetCell.setActiveStatus(true);
    })
    it('with two or three alive neighbors', () => {
      matrix[0][0].setActiveStatus(true);
      matrix[0][1].setActiveStatus(true);
      
      expect(healthChecker.checkIfCellIsAlive(targetCell, matrix)).toBe(true);

      matrix[2][2].setActiveStatus(true);
      expect(healthChecker.checkIfCellIsAlive(targetCell, matrix)).toBe(true);
    })

    it('with zero or one alive neighbors', () => {
      expect(healthChecker.checkIfCellIsAlive(targetCell, matrix)).toBe(false);
      matrix[2][2].setActiveStatus(true);
      expect(healthChecker.checkIfCellIsAlive(targetCell, matrix)).toBe(false);
    })
  })
  
  describe('for dead cell', () => {
    beforeEach(() => {
      
      matrix = [
        [new Cell(svg, 0,0),new Cell(svg, 0,1),new Cell(svg, 0,2)],
        [new Cell(svg, 1,0),new Cell(svg, 1,1),new Cell(svg, 1,2)],
        [new Cell(svg, 2,0),new Cell(svg, 2,1),new Cell(svg, 2,2)],
      ]
      
    })
    it('located top left with three neighbors', () => {
      targetCell = matrix[0][0];
      matrix[0][1].setActiveStatus(true);
      matrix[1][0].setActiveStatus(true);
      expect(healthChecker.checkIfCellIsAlive(targetCell, matrix)).toBe(false);
      matrix[1][1].setActiveStatus(true);
      expect(healthChecker.checkIfCellIsAlive(targetCell, matrix)).toBe(true);

    })

    it('located bottom right with three neighbors', () => {
      targetCell = matrix[2][2];
      matrix[2][1].setActiveStatus(true);
      matrix[1][2].setActiveStatus(true);
      expect(healthChecker.checkIfCellIsAlive(targetCell, matrix)).toBe(false);
      matrix[1][1].setActiveStatus(true);
      expect(healthChecker.checkIfCellIsAlive(targetCell, matrix)).toBe(true);

    })
  })

  
})
