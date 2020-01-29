import {Cell} from "./cell"

type Matrix = Cell[][];

export class Game {
    protected matrix :Matrix;
    protected matrixLines: number;
    protected matrixColumns: number;
    constructor(protected gameSVG: SVGSVGElement) {
      this.matrix = [];
      const width = this.gameSVG.width.baseVal.value
      const height = this.gameSVG.height.baseVal.value
      this.matrixLines = height/10;
      this.matrixColumns = width/10;
    } 
    
    public generate () {
      const maxGen: number = this.matrixLines*this.matrixColumns/4;
      for (let i =0; i < maxGen; i++) {
        const ri: number = Math.floor(Math.random() * this.matrixLines) + 0;
        const rj: number = Math.floor(Math.random() * this.matrixColumns) + 0;
        this.matrix[ri][rj].setActiveStatus(true);
      }
    }
    
    public initialize() {
      for (let i = 0; i < this.matrixLines; i++) {
        this.matrix.push([]); 
        for (let j = 0; j < this.matrixColumns; j++) {
          const cell = new Cell(this.gameSVG, i, j);
          this.matrix[i].push(cell);
        }
      }
      this.generate();
      this.run();
    }
    
    protected run() {
      setInterval(() => {
        const previousState = this.matrix // JSON.parse(JSON.stringify(this.matrix));
        for (let i = 0; i < this.matrixLines; i++) {
          for (let j = 0; j < this.matrixColumns; j++) {
            this.checkCell(i,j,previousState);
          }
        }
      }, 150)
    }
    
    public checkCell(i:number,j:number, state: Matrix) {
      let aliveN = 0;
      const maxI = this.matrixLines - 1;
      const maxJ = this.matrixColumns - 1;
      const cell = this.matrix[i][j];
      const currentCellState = cell.getActiveStatus();
      
      if ( i > 0 ) {
        if ( state[i-1][j].getActiveStatus() ) {
          aliveN++;
        }
      } else {
         // aliveN += 3;
      }
      
      if ( j > 0 ) {
        if ( state[i][j-1].getActiveStatus() ) {
          aliveN++;
        }
      } else {
        // aliveN += 3
      }
      
      if ( i > 0 && j > 0) {
        if ( state[i-1][j-1].getActiveStatus() ) {
          aliveN++;
        }
      } else {
        // aliveN += 3
      }
      
      if ( i < maxI ) {
        if ( state[i+1][j].getActiveStatus() ) {
          aliveN++;
        }
      } else {
        // aliveN += 3;
      }
      
      if ( j < maxJ ) {
        if ( state[i][j+1].getActiveStatus() ) {
          aliveN++;
        }
      } else {
        // aliveN += 3;
      }
      
      if ( i < maxI && j < maxJ) {
        if ( state[i+1][j+1].getActiveStatus() ) {
          aliveN++;
        }
      } else {
        // aliveN += 3
      }
      
      if ( i > 0 && j < maxJ) {
        if ( state[i-1][j+1].getActiveStatus() ) {
          aliveN++;
        }
      } else {
        // aliveN += 3
      }
      
      if ( i < maxI && j > 0) {
        if ( state[i+1][j-1].getActiveStatus() ) {
          aliveN++;
        }
      } else {
        // aliveN += 3
      }
      
      if (currentCellState) {
        if ( (aliveN === 3 || aliveN === 2)) {
            cell.setActiveStatus(true);
        } else {
            cell.setActiveStatus(false);
        }
      } else {
        if ( aliveN === 3) {
            cell.setActiveStatus(true);
        }
      }
    }
  }
  
