import type { CSSProperties, VFC } from 'react';
import { DragPreviewImage, useDrag } from 'react-dnd';
import { DndItemTypes } from '../DndItemTypes';

type Props = {}

const knightStyle: CSSProperties = {
  fontSize: 25,
  fontWeight: 'bold',
  cursor: 'move',
}

export const Knight : VFC<Props> = (props: Props) => {
  const [{isDragging}, drag, preview] = useDrag(() => ({
    type: DndItemTypes.KNIGHT,
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))
  const {} = props;
  return (
    <>
      <DragPreviewImage connect={preview} src="/images/Knight.png" />
      <div
        ref={drag}
        style={{
          ...knightStyle,
          opacity: isDragging ? 0.5 : 1,
        }}>♘</div>
    </>
  );
};

export default Knight