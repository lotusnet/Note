import Link from 'next/link';
import type { VFC } from 'react';

export const Footer : VFC = () =>
{
  return (
    <>      
      <div className="header-footer">
        <span>
          <Link href={`/`}><a>HOME</a></Link> | <Link href={`/note`}><a>NOTE</a></Link> | <Link href={`/schedule`}><a>SCHEDULE</a></Link> | <Link href={`/checklist`}><a>CHECK LIST</a></Link> | <Link href={`/about`}><a>ABOUT</a></Link> | <Link href={`/chessboard`}><a>CHESS BOARD</a></Link>
          | <Link href={`/prototype`}><a>PROTO TYPE</a></Link>        
        </span>
        <footer>©2021. PETRO</footer>
      </div>
    </>
  );
};

export default Footer