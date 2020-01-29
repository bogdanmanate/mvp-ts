import {Game} from "./game";

const gameCanvas = document.querySelector<SVGSVGElement>('#gameCanvas');
if (gameCanvas) {
  const game = new Game(gameCanvas);
  game.initialize();
}
