import React, { ReactNode, VFC } from "react";
import { useDrop } from 'react-dnd';
import { DndItemTypes } from "../DndItemTypes";
import { Game } from './Game';
import { Overlay, OverlayTypeMap } from "./Overlay";
import Square, { colorMap } from "./Square";

type BoardSquareProps = {
  x: number
  y: number
  children? : ReactNode
  game: Game
}

export const BoardSquare: VFC<BoardSquareProps> = ({x, y, children, game}) => {
  const darkslateblue = (x + y) % 2 === 1 ? colorMap.darkslateblue : colorMap.white
  const [{isOver, canDrop}, drop] = useDrop(() => ({
    accept: DndItemTypes.KNIGHT,
    canDrop: () => game.canMoveKnight(x, y),
    drop: () => game.moveKnight(x, y),    
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop()
    }),
  }), [game])

  return (
    <>
      <div
        ref={drop}
        role="Space"
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
        }}
      >
        <Square colors={darkslateblue}>{children}</Square>
        {isOver && !canDrop && <Overlay type={OverlayTypeMap.IllegalMoveHover} />}
        {!isOver && canDrop && <Overlay type={OverlayTypeMap.PossibleMove} />}
        {isOver && canDrop && <Overlay type={OverlayTypeMap.LegalMoveHover} />}
      </div>
    </>
  )
}

export default BoardSquare