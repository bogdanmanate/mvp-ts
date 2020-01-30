import {Cell} from "./cell"
import { HealthChecker } from "./health-checker";

export type Matrix = Cell[][];

export class Game {
    protected matrix :Matrix;
    protected matrixLines: number;
    protected matrixColumns: number;
    protected healthChecker: HealthChecker;

    constructor(protected gameSVG: SVGSVGElement) {
      this.matrix = [];
      
      this.matrixLines = this.height/10;
      this.matrixColumns = this.width/10;
      this.healthChecker = new HealthChecker()
    } 

    public get width(): number {
        const w = this.gameSVG.getAttribute("width")
        if ( w !== null) {
            return +w
        } else {
            return 0;
        }
    }

    public get height(): number {
        const h = this.gameSVG.getAttribute("height")
        if ( h !== null) {
            return +h
        } else {
            return 0;
        }
    }
    
    public generate () {
      const maxGen: number = this.matrixLines*this.matrixColumns/4;
      for (let i =0; i < maxGen; i++) {
        const ri: number = Math.floor(Math.random() * this.matrixLines);
        const rj: number = Math.floor(Math.random() * this.matrixColumns);
        
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
    }
    
    public run() {
        this.initialize();
        this.generate();
        const interval = setInterval(() => {
            for (let i = 0; i < this.matrixLines; i++) {
            for (let j = 0; j < this.matrixColumns; j++) {
                const cell = this.matrix[i][j];
                cell.setActiveStatus(this.healthChecker.checkIfCellIsAlive(cell,this.matrix));
            }
            }
        }, 150)
      return interval;
    }
    
    
  }
  
