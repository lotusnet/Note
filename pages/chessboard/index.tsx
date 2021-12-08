import { useMemo, VFC } from 'react';
import { Board } from '../components/chessboard/Board';
import { Game } from '../components/chessboard/Game';
import { Layout } from '../components/layout/Layout';

export const ChessBoard : VFC = () =>
{
  const game = useMemo(() => new Game(), [])

  return (
    <>
      <Layout title={`CHESS BOARD`}>
        <h1>CHESS BOARD</h1>
        <div style={{width: '250px', height: '250px'}}>
          <Board game={game} />
        </div>
      </Layout>
    </>
  )
}

export default ChessBoard