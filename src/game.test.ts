import { Game } from './game';

describe('Game', () => {
  let svg: SVGSVGElement;
  let game: Game;

  beforeEach(() => {
    document.body.innerHTML =
    '<div>' +
    '  <svg id="gameCanvas" width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg"></svg>' +
    '</div>';

    svg = document.querySelector<SVGSVGElement>('#gameCanvas') as SVGSVGElement;
    game = new Game(svg);
   
  })
  it('will initialize the svg rectangles', () => {
    expect(game.width).toBe(600);
    expect(game.height).toBe(600);
    const interval = game.run()
    clearInterval(interval);
    expect(svg.children.length).toBe(3600);
  })

  
})
