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
      // Write a function that randomly generates 25% of alive cells
    }
    
    public initialize() {
      // Initialize a matrix of dead cells
    }
    
    public run() {
        this.initialize();
        this.generate();
        const interval = setInterval(() => {
            // check the health of every cell in the matrix
        }, 150)
      return interval;
    }
    
    
  }
  
