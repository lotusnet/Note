import { useEffect, useState, VFC } from 'react';
import BoardSquare from './BoardSquare';
import { Game, Position } from './Game';
import Knight from './Knight';

type Props = {
  game: Game
}

export const Board : VFC<Props> = ({game}) =>
{
  const [[knightX, knightY], setKnightPos] = useState<Position>(
    game.knightPosition,
  )
  useEffect(() => game.observe(setKnightPos))

  const renderSquare = (i: number, knightPosition: number[]) => {
    const x = i % 8
    const y = Math.floor(i / 8)
  
    // const handleSquareClick = (toX: number, toY: number) => {
    //   if (game.canMoveKnight(toX, toY)) {
    //     game.moveKnight(toX, toY)
    //   }
    // }

    return (
      <>
        <div key={i} style={{width: '12.5%', height: '12.5%'}}>
          <BoardSquare x={x} y={y} game={game}>
            {renderPiece(x, y, knightPosition)}
          </BoardSquare>
        </div>    
      </>
    )
  }

  const renderPiece = (x: number, y: number, [knightX, knightY]: number[]) => {
    if (x === knightX && y === knightY) {
      return <Knight />
    }
  }

  const squares = []
  for(let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, game.knightPosition))
  }
  
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
      }}>
      {squares}
    </div>
  );
};

export default Board