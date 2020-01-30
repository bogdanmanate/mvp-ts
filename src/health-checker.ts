import { Cell } from "./cell"
import { Matrix } from "./game"

export class HealthChecker {
    public checkIfCellIsAlive(cell: Cell, state: Matrix): boolean {
        let aliveN = 0;
        const maxI = state.length - 1;
        const maxJ = state[0].length - 1;
        const i = cell.line
        const j = cell.column
        const currentCellState = cell.getActiveStatus();
        let isAlive = false
        
        if ( i > 0 ) {
          if ( state[i-1][j].getActiveStatus() ) {
            aliveN++;
          }
        } 
        
        if ( j > 0 ) {
          if ( state[i][j-1].getActiveStatus() ) {
            aliveN++;
          }
        }
        
        if ( i > 0 && j > 0) {
          if ( state[i-1][j-1].getActiveStatus() ) {
            aliveN++;
          }
        }
        
        if ( i < maxI ) {
          if ( state[i+1][j].getActiveStatus() ) {
            aliveN++;
          }
        }
        
        if ( j < maxJ ) {
          if ( state[i][j+1].getActiveStatus() ) {
            aliveN++;
          }
        }
        
        if ( i < maxI && j < maxJ) {
          if ( state[i+1][j+1].getActiveStatus() ) {
            aliveN++;
          }
        }
        
        if ( i > 0 && j < maxJ) {
          if ( state[i-1][j+1].getActiveStatus() ) {
            aliveN++;
          }
        }
        
        if ( i < maxI && j > 0) {
          if ( state[i+1][j-1].getActiveStatus() ) {
            aliveN++;
          }
        }
        
        if (currentCellState) {
          if ( (aliveN === 3 || aliveN === 2)) {
              isAlive = true;
          } else {
              isAlive = false;
          }
        } else {
          if ( aliveN === 3) {
              isAlive = true;
          }
        }
        return isAlive;
    }
}